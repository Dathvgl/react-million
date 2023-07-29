import react from "@vitejs/plugin-react-swc";
import million from "million/compiler";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: { host: true, strictPort: true },
  plugins: [million.vite(), react()],
  resolve: { alias: { "~": "/src" } },
  envPrefix: ["VITE_", "NODE_"],
});
