import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    allowedHosts: [
      '45877c21-7f3d-4c18-958c-0fd53f243f80-00-3tbea6xqo9ths.riker.replit.dev'
    ],
    host: true,   // gör att den accepterar externa hosts
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  base: mode === 'production' ? '/happy-life-prototype/' : '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
}));