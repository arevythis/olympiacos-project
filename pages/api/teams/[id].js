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
    const { id } = req.query;
    try {
      const result = await pool.query('SELECT * FROM teams WHERE team_id = $1', [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Team not found' });
      }
      res.json(result.rows[0]);
    } catch (err) {
      console.error('Error fetching team by ID:', err);
      res.status(500).json({ error: 'Failed to fetch team' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}