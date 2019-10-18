import resolve from 'rollup-plugin-node-resolve'
import fs from 'fs'

export default {
  input: fs
    .readdirSync('functions')
    .filter(f => f.endsWith('.ts'))
    .map(f => `functions/compiled/${f.replace('.ts', '.js')}`),
  output: {
    dir: 'functions/dist',
    format: 'cjs'
  },
  plugins: [
    resolve({
      preferBuiltins: true
    })
  ]
}
