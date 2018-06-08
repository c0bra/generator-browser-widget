import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';<% if (babel) { %>
import babel from 'rollup-plugin-babel';<% } %><% if (postcss) { %>
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import nested from 'postcss-nested';
import simplevars from 'postcss-simple-vars';<% } %>
import pkg from './package.json';

export default [
  // browser-friendly UMD build
  {
    input: './index.js',
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
      }),<% } %><% if (babel) { %>
      babel({
        exclude: 'node_modules/**',
        presets: [ [ 'env', { modules: false } ] ],
        plugins: [ 'external-helpers' ]
      }),<% } %>
    ]
  }
];
