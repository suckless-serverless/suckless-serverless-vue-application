import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import VuePlugin from "rollup-plugin-vue";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/bundle.cjs.js",
      format: "cjs"
    },
    {
      file: "dist/bundle.ems.js",
      format: "esm"
    },
    {
      name: "modvue",
      file: "dist/bundle.umd.js",
      format: "umd"
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    VuePlugin(),
    babel({
      exclude: "node_modules/**" // only transpile our source code
    }),
    production && terser()
  ]
};
