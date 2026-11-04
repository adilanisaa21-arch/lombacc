// supabase_config.js - Konfigurasi Terpusat Supabase Cloud
// File ini membuat SELURUH murid dan guru yang membuka link Vercel otomatis terhubung ke Supabase.

window.CC_SUPABASE_CONFIG = {
  URL: "https://lumwnqixpynmommycrjj.supabase.co",
  ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1bXducWl4cHlubW9tbXljcmpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM2NzMyOTQsImV4cCI6MjEwOTI0OTI5NH0.DdfGn5Eu8_8FZdNEBDc7pYKLYlhnAFWRYbyG4by09kU"
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.CC_SUPABASE_CONFIG;
}
