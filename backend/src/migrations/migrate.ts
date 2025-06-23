import { db } from "../config/mysql";
import fs from 'fs/promises';
import path from 'path';

export async function migrateDB() {
  try {
    const filePath = path.join(__dirname, 'sql/003_create_counter.sql');
    console.log(filePath)
    const sql = await fs.readFile(filePath, 'utf-8');
    const connection = await db.getConnection();
    await connection.query(sql);
    console.log("SQL script executed successfully");
    connection.release();
  } catch (err) {
    console.error("Failed to execute SQL script:", err);
  }
}
