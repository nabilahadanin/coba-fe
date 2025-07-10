import supabase from './lib/supabaseClient.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { data, error } = await supabase.from('items').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json(data);
}