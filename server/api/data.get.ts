import { createPool } from "@vercel/postgres";

const postgresUrl = useRuntimeConfig().POSTGRES_URL;

console.log({ postgresUrl });

const pool = createPool({
  connectionString: postgresUrl,
});

export default defineEventHandler(async (event) => {
  console.log({ postgresUrl });

  const users = await pool.sql`SELECT * FROM users;`;
  return {
    users: users.rows,
  };
});
