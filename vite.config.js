import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import envCompatible from "vite-plugin-env-compatible";
import macrosPlugin from "vite-plugin-babel-macros";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-macros", "babel-plugin-styled-components"],
      },
    }),
    envCompatible(),
    macrosPlugin(),
    WindiCSS(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
