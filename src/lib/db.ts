import { createPool, type Pool } from "mysql2/promise";

let pool: Pool | undefined;

export function getDbPool(): Pool {
  if (pool) {
    return pool;
  }

  const host = process.env.MYSQL_HOST;
  const user = process.env.MYSQL_USER;
  const database = process.env.MYSQL_DATABASE;
  const port = Number(process.env.MYSQL_PORT ?? "3306");

  if (!host || !user || !database) {
    throw new Error("MYSQL_HOST, MYSQL_USER, and MYSQL_DATABASE must be configured.");
  }

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("MYSQL_PORT must be a valid TCP port.");
  }

  pool = createPool({
    host,
    port,
    user,
    password: process.env.MYSQL_PASSWORD ?? "",
    database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    supportBigNumbers: true,
    bigNumberStrings: true,
  });

  return pool;
}
