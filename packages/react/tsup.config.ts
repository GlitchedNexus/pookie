import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: {
    resolve: true,
  },
  entry: ["src/index.ts"],
  external: ["react", "react-dom", "react/jsx-runtime"],
  format: ["esm", "cjs"],
  minify: false,
  outDir: "dist",
  sourcemap: true,
  splitting: false,
  treeshake: true,
});
