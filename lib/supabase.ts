
import { createClient } from 'https://esm.sh/@supabase/supabase-js@^2.45.0';

// Use process.env as fallback to fix ImportMeta errors in this environment
const supabaseUrl = (process.env?.VITE_SUPABASE_URL || 'https://placeholder.supabase.co');
const supabaseAnonKey = (process.env?.VITE_SUPABASE_ANON_KEY || 'placeholder');

// 실제 유효한 값이 들어있는지 확인합니다.
export const isConfigured = !!(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'https://placeholder.supabase.co' &&
  supabaseAnonKey !== 'placeholder'
);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
