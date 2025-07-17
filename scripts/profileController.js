// scripts/profileController.js
import { supabase } from './supabaseClient.js';

export async function getCharacterProfile(username) {
  const { data, error } = await supabase
  .from('characters')
  .select(`
    id,
    player,
    name,
    level,
    max_hp,
    max_mp,
    attack,
    defense, 
    total_power,
    player:players (
      username,
      email,
      total_col,
      arcana_gems
    )
  `)
  .eq('player', 'ARJUNA_99')
  .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}
