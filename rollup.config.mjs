import { readFileSync } from 'fs';
import typescript from 'rollup-plugin-typescript2';
const pkg = JSON.parse(readFileSync('./package.json'));

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [typescript()],
};
