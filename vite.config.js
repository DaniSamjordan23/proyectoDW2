import { defineConfig } from "vite";
import path from "node:path";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  appType: "mpa", // multipage app
  plugins: [
    handlebars({

      partialDirectory: path.resolve(__dirname, "Partials"),
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        // aquí declaro
        main: path.resolve(__dirname, "index.html"),
        entradas: path.resolve(__dirname, "entradas.html"),
        arroz: path.resolve(__dirname, "arroz.html"),
        mariscos: path.resolve(__dirname, "mariscos.html"),
        especialidades: path.resolve(__dirname, "especialidades.html"),
      },
    },
  },
});
