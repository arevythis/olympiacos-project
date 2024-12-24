import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config();

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Clear any authentication-related cookies or tokens here if necessary

    // Respond with a logout success message
    res.json({ message: 'Logout successful' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}