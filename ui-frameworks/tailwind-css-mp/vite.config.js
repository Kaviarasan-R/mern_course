import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: `/hello`,
    plugins: [react(), tailwindcss()],
    server: {
      open: true,
      host: false, // Allow access from network devices
    },
  };
});
