import app from "@/lib/config/app";
import pg from "pg";
import knex from "knex";

export const pool = new pg.Pool({
  min: 0,
  max: 5,
  connectionString: app.DATABASE_URL,
});

export const KNEX_CONNECTION = knex({
  client: "pg",
  connection: app.DATABASE_URL,
  pool: { min: 0, max: 5 },
});
