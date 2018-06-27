import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';<% if (babel) { %>
import babel from 'rollup-plugin-babel';<% } %><% if (typescript) { %>
import typescript from 'rollup-plugin-typescript2';<% } %><% if (svelte) { %>
import svelte from 'rollup-plugin-svelte';
import less from 'less';<% } %><% if (postcss) { %>
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import nested from 'postcss-nested';
import simplevars from 'postcss-simple-vars';<% } %>
import pkg from './package.json';

export default [
  // browser-friendly UMD build
  {
    <% if (typescript) { %>input: './index.ts',<% } else { %>input: './index.js',<% } %>
    output: [
      {
        name: '<%= camelModuleName %>',
        file: pkg.browser,
        format: 'umd',
        sourcemap: true,
        sourcemapFile: `${pkg.browser}.map`
      },
      {
        name: '<%= camelModuleName %>',
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        sourcemapFile: `${pkg.main}.map`
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      <% if (postcss) { %>
      postcss({
        plugins: [
          nested(),
          simplevars(),
          cssnano(),
        ],
      }),<% } %><% if (svelte) { %>
      svelte({
        preprocess: {
          style: ({ content, attributes }) => {
            if (attributes.lang !== 'less') return;

            return less.render(content)
            .then(output => ({ code: output.css, map: output.map }));
          },
        },
      }),<% } %><% if (babel) { %>
      babel({
        exclude: 'node_modules/**',
        presets: [ [ 'env', { modules: false } ] ],
        plugins: [ 'external-helpers' ]
      }),<% } %><% if (typescript) { %>
      typescript(),<% } %>
    ]
  }
];
