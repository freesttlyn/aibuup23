
import { createClient } from 'https://esm.sh/@supabase/supabase-js@^2.45.0';

// Using dummy strings to prevent SDK crash if env vars are missing
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'placeholder';

// isConfigured accurately reflects if real credentials are provided
export const isConfigured = !!(
  process.env.VITE_SUPABASE_URL && 
  process.env.VITE_SUPABASE_ANON_KEY && 
  process.env.VITE_SUPABASE_URL !== 'https://placeholder.supabase.co'
);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
