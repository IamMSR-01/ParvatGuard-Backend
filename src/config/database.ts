import knex from "knex";
// @ts-ignore 
import config from "../../knexfile";

const env = process.env.NODE_ENV || "development";
const dbConfig = config[env as keyof typeof config] || config.development;

// Create Knex instance
export const db = knex(dbConfig);

// Health check function
export async function healthCheck(): Promise<boolean> {
  try {
    await db.raw("SELECT 1");
    return true;
  } catch (error) {
    return false;
  }
}
