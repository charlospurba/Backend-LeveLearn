const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = "https://hfuwatcoqcitqykvrtbp.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmdXdhdGNvcWNpdHF5a3ZydGJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyNDYyODEsImV4cCI6MjA4MTgyMjI4MX0.JGgZorny4tj7Zo5G7KfuA30dwpX3F5iL3tvLeJIeW4c";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

module.exports = supabase;