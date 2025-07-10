import supabase from './lib/supabaseClient.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const id = req.query.id;
  const { error } = await supabase.from('items').delete().eq('id', id);
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ message: 'Deleted' });
}