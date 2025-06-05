
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', date: new Date() });
});

app.get('/api/candidates', async (_req, res) => {
  const mockData = [
    { id: 1, name: 'Jane Doe', skills: ['React', 'Node'] },
    { id: 2, name: 'John Doe', skills: ['Python', 'Django'] }
  ];
  res.json(mockData);
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});

