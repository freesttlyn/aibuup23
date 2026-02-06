
import { createClient } from 'https://esm.sh/@supabase/supabase-js@^2.45.0';

// Cloudflare Pages에서 주입하는 환경 변수 직접 참조
const supabaseUrl = typeof process !== 'undefined' ? (process.env.VITE_SUPABASE_URL || localStorage.getItem('VITE_SUPABASE_URL')) : '';
const supabaseAnonKey = typeof process !== 'undefined' ? (process.env.VITE_SUPABASE_ANON_KEY || localStorage.getItem('VITE_SUPABASE_ANON_KEY')) : '';

export const isConfigured = 
  supabaseUrl && 
  supabaseUrl.startsWith('https://') && 
  supabaseAnonKey && 
  supabaseAnonKey.length > 20;

// 설정되지 않았을 경우 앱이 죽지 않도록 기본값 유지하되 기능은 데모로 작동
export const supabase = createClient(
  isConfigured ? supabaseUrl! : 'https://placeholder.supabase.co',
  isConfigured ? supabaseAnonKey! : 'placeholder-key'
);

export const isDemoMode = !isConfigured;
