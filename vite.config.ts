import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfgPaths from "vite-tsconfig-paths";
import { viteStaticCopy } from "vite-plugin-static-copy";  // Gunakan named import

// https://vite.dev/config/
export default defineConfig({
  base: '/oocidia/',
  plugins: [
    react(),
    tsConfgPaths(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/img/*',
          dest: 'assets/'
        }
      ]
    })
  ]
});
