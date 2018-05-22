import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';<% if (babel) { %>
import babel from 'rollup-plugin-babel';<% } %>
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
      commonjs(),<% if (babel) { %>
      babel({
        exclude: 'node_modules/**',
        presets: [ [ 'env', { modules: false } ] ],
        plugins: [ 'external-helpers' ]
      }),<% } %>
    ]
  }
];
