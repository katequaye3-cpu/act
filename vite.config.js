import { defineConfig,loadEnv } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  
  // configuration options
  define: {
    'process.env': {
      VITE_API_KEY: process.env.VITE_API_KEY,
      VITE_API_URL: process.env.VITE_API_URL,
    },
  },
});