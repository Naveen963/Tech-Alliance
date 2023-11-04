import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lxxxraiswfwdfbwqtffk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4eHhyYWlzd2Z3ZGZid3F0ZmZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg5MDQxNzcsImV4cCI6MjAxNDQ4MDE3N30.TIPWKd5XoWRzUmHfalkTfuKOn7AIu6PSQe_Y3gVcEt0";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
