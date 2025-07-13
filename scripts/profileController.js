// scripts/profileController.js
import { supabase } from './supabaseClient.js';

export async function getUserProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}
