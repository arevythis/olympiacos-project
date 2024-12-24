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
  if (req.method === 'DELETE') {
    const { id } = req.body; // Ensure the id is coming from the request body
    try {
      const result = await pool.query('DELETE FROM teams WHERE team_id = $1', [id]);

      if (result.rowCount === 0) {
        console.log(`Team with ID ${id} not found.`);
        return res.status(404).json({ error: 'Team not found' });
      }

      res.status(200).json({ message: 'Team deleted successfully' });
    } catch (err) {
      console.error('Error deleting team:', err);
      res.status(500).json({ error: 'Failed to delete team', message: err.message });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}