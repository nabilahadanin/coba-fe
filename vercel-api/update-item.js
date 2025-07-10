import supabase from './lib/supabaseClient.js';
export const config = { api: { bodyParser: true } };

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // Preflight request success
  }
  const id = req.query.id;
  const { name } = req.body;
  const { data, error } = await supabase.from('items').update({ name }).eq('id', id);
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json(data);
}