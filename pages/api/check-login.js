import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export default function handler(req, res) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });

    res.status(200).json({ loggedIn: true, username: user.username });
  });
}