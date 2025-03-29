import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Add this line for correct base path
  server: {
    port: 5174, // For local development
  },
});
