import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const rollupConfig = {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true,
    }),
  ],
  external: ['react', 'react-dom'],
};

export default rollupConfig;
