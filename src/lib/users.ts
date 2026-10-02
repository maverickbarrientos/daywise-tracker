import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { getDbPool } from "@/lib/db";
import type { UserRole } from "@/lib/auth-types";

interface UserRow extends RowDataPacket {
  id: string;
  email: string;
  password_hash: string;
  role: UserRole;
}

export type StoredUser = {
  id: string;
  email: string;
  passwordHash: string;
  role: UserRole;
};

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export async function findUserByEmail(email: string): Promise<StoredUser | null> {
  const [rows] = await getDbPool().execute<UserRow[]>(
    "SELECT id, email, password_hash, role FROM users WHERE email = ? LIMIT 1",
    [normalizeEmail(email)],
  );
  const user = rows[0];

  if (!user) {
    return null;
  }

  return {
    id: String(user.id),
    email: user.email,
    passwordHash: user.password_hash,
    role: user.role,
  };
}

export async function insertUser(
  email: string,
  passwordHash: string,
): Promise<string> {
  const [result] = await getDbPool().execute<ResultSetHeader>(
    "INSERT INTO users (email, password_hash) VALUES (?, ?)",
    [normalizeEmail(email), passwordHash],
  );

  return String(result.insertId);
}

export function isDuplicateEmailError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "ER_DUP_ENTRY"
  );
}
