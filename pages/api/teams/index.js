import { Pool } from 'pg';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT * FROM teams'); 
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'No teams found' });
      }
      res.json(result.rows);  
    } catch (err) {
      console.error('Error fetching teams:', err);
      res.status(500).json({ error: 'Failed to fetch teams' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}