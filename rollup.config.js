import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import visualizer from "rollup-plugin-visualizer";
import postcss from 'rollup-plugin-postcss';

module.exports = {
    input: "src/Editable.js",
    output: {
        name: "Editable",
        file: "dist/editable.js",
        format: "cjs"
    },
    plugins: [
        postcss({ modules: false, extensions: ['.css'] }),
        nodeResolve(),
        babel({exclude: "node_modules/**"}),
        visualizer({filename: "bundleSize.html", open: true})
    ],
    external: ["react", "react-dom", "prop-types", "react-bootstrap"]
};