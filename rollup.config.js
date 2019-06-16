import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/vee-validate-laravel-extended.js',
  output: {
    name: 'VeeValidateLaravel',
    env: 'production',
    format: 'umd',
    file: 'dist/vee-validate-laravel-extended.js',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify(),
  ],
};
