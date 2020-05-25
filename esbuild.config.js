const { build } = require('esbuild')

const options = {
  stdio: 'inherit',
  entryPoints: ['./src/**/*'],
  outDir: './dist',
  target: 'es6',
  sourceMap: true,
  minify: false,
  bundle: false,
}

build(options).catch(() => process.exit(1))