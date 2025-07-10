import supabase from './lib/supabaseClient.js';
export const config = { api: { bodyParser: true } };

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { name } = req.body;
  const { data, error } = await supabase.from('items').insert([{ name }]);
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json(data);
}