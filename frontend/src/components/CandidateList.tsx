
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Candidate {
  id: number;
  name: string;
  skills: string[];
}

export default function CandidateList() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_BASE_URL + '/api/candidates')
      .then(res => setCandidates(res.data))
      .catch(console.error);
  }, []);

  return (
    <ul>
      {candidates.map(c => (
        <li key={c.id}>
          <strong>{c.name}</strong> - {c.skills.join(', ')}
        </li>
      ))}
    </ul>
  );
}

