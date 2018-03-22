import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
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
      commonjs()
    ]
  }
];
