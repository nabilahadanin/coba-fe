import supabase from './lib/supabase.js';

export default async function handler(req, res) {
  // ✅ CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://nabilahadanin.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // ✅ Tangani preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // ✅ Parse JSON body secara manual (karena Vercel tidak otomatis)
  if (req.method === 'POST' || req.method === 'PUT') {
    try {
      if (typeof req.body === 'string') {
        req.body = JSON.parse(req.body);
      }
    } catch (err) {
      return res.status(400).json({ error: 'Invalid JSON' });
    }
  }

  // ✅ Tangani method POST
  if (req.method === 'POST') {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Field "name" wajib diisi' });
    }

    const { data, error } = await supabase.from('items').insert([{ name }]);
    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json(data);
  }

  // ❌ Method selain POST
  res.status(405).end('Method Not Allowed');
}
