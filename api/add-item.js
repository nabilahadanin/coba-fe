import supabase from './lib/supabaseClient';

export default async function handler(req, res) {
  // ✅ CORS headers wajib
  res.setHeader('Access-Control-Allow-Origin', 'https://nabilahadanin.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // ✅ Tangani preflight request (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // ini WAJIB
  }

  // ✅ Tangani POST (insert item)
  if (req.method === 'POST') {
    const { name } = req.body;
    const { data, error } = await supabase.from('items').insert([{ name }]);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  // ❌ Method lain = ditolak
  res.status(405).end('Method Not Allowed');
}