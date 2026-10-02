import { hash } from "bcryptjs";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import {
  findUserByEmail,
  insertUser,
  isDuplicateEmailError,
  normalizeEmail,
} from "@/lib/users";

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (session?.user?.id) {
    return Response.json(
      { error: "You are already signed in." },
      { status: 403 },
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Request body must be valid JSON." }, { status: 400 });
  }

  if (!isObject(payload)) {
    return Response.json({ error: "Request body must be an object." }, { status: 400 });
  }

  const email =
    typeof payload.email === "string" ? normalizeEmail(payload.email) : "";
  const password = typeof payload.password === "string" ? payload.password : "";

  if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (password.length < 8 || Buffer.byteLength(password, "utf8") > 72) {
    return Response.json(
      { error: "Password must be at least 8 characters and no more than 72 UTF-8 bytes." },
      { status: 400 },
    );
  }

  try {
    if (await findUserByEmail(email)) {
      return Response.json(
        { error: "An account with this email already exists." },
        { status: 409 },
      );
    }

    const passwordHash = await hash(password, 12);
    const id = await insertUser(email, passwordHash);

    return Response.json(
      { id, message: "Account created. You can now sign in." },
      { status: 201 },
    );
  } catch (error) {
    if (isDuplicateEmailError(error)) {
      return Response.json(
        { error: "An account with this email already exists." },
        { status: 409 },
      );
    }

    console.error("Unable to create user account.", error);
    return Response.json(
      { error: "Unable to create your account right now. Please try again." },
      { status: 500 },
    );
  }
}
