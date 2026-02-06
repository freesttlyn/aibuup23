
import { createClient } from 'https://esm.sh/@supabase/supabase-js@^2.45.0';

// Use process.env as import.meta.env is not available in this environment
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || '';

// 설정 여부 확인 로직 (공백이거나 placeholder인 경우 false)
export const isConfigured = !!(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'https://placeholder.supabase.co' &&
  supabaseUrl !== '' &&
  supabaseAnonKey !== 'placeholder' &&
  supabaseAnonKey !== ''
);

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseAnonKey || 'placeholder'
);
