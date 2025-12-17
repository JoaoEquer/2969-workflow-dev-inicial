/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import sqlite3 from 'sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'src', 'test', 'livraria.sqlite');
const sqlPath = path.join(__dirname, 'populate.sql');

// Ensure directory exists
const dir = path.dirname(dbPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Remove existing db
if (fs.existsSync(dbPath)) {
  fs.unlinkSync(dbPath);
}

const db = new sqlite3.Database(dbPath);
const sql = fs.readFileSync(sqlPath, 'utf8').replace('.exit', '');

db.exec(sql, (err) => {
  if (err) {
    console.error('Error populating DB:', err);
    process.exit(1);
  } else {
    console.log('DB populated successfully.');
    db.close();
  }
});
