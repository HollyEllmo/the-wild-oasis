import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lvrjpzornizlyyalnbeh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2cmpwem9ybml6bHl5YWxuYmVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1NTUxMTAsImV4cCI6MjAxNTEzMTExMH0.OQ8qXSv8u6HIFiQsRs9AtMR3bDtnGDAEoPEZHPuMYjk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
