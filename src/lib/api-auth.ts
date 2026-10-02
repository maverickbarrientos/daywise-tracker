import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import type { UserRole } from "@/lib/auth-types";

type ApiUser = {
  id: string;
  role: UserRole;
};

export async function requireApiUser(): Promise<ApiUser | Response> {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user?.id || !user.role) {
    return Response.json({ error: "Authentication required." }, { status: 401 });
  }

  return { id: user.id, role: user.role };
}

export async function requireApiRole(
  ...allowedRoles: UserRole[]
): Promise<ApiUser | Response> {
  const user = await requireApiUser();

  if (user instanceof Response) {
    return user;
  }

  if (!allowedRoles.includes(user.role)) {
    return Response.json({ error: "Forbidden." }, { status: 403 });
  }

  return user;
}
