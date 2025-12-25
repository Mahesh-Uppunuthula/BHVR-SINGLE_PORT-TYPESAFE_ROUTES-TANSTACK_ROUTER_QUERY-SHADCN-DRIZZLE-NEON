// import { migrate } from "drizzle-orm/neon-http/migrator";
// import { db } from "../db";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";

const sql = neon(process.env.DB_URL!);
const db = drizzle(sql);

async function runMigrations() {
  try {
    console.log("Running migrations");
    await migrate(db, {
      migrationsFolder: "./migrations",
    });
    console.log("Migrations completed ✅");
    process.exit(0);
  } catch (error) {
    console.log("Migrations failed ❌", error);
    process.exit(1);
  }
}
runMigrations();
