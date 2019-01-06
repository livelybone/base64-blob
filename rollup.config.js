import fs from 'fs'
import path from 'path'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'
import license from 'rollup-plugin-license'

const formats = ['es', 'umd']

function getEntries() {
  const reg = /\.js$/
  return fs.readdirSync(path.resolve(__dirname, './src'))
    .filter(filename => reg.test(filename) && !fs.statSync(path.resolve(__dirname, './src', filename)).isDirectory())
    .map(filename => ({
      name: filename.replace(reg, ''),
      filename: path.resolve(__dirname, './src', filename),
      formats: formats.filter(f => f !== 'es'),
    }))
}

const conf = entry => ({
  input: entry.filename,
  output: entry.formats.map(format => ({
    file: `./lib/${format}/${entry.name}.js`,
    format,
    name: 'index' === entry.name ? 'Base64_Blob' : `${entry.name}Base64_Blob`,
  })),
  external: entry.external ? ['b64-to-blob'] : [],
  plugins: [
    resolve(),
    commonjs(),
    (entry.needUglify !== false && uglify()),
    license({
      banner: `Bundle of <%= pkg.name %>
               Generated: <%= moment().format('YYYY-MM-DD') %>
               Version: <%= pkg.version %>
               License: <%= pkg.license %>
               Author: <%= pkg.author %>`,
    }),
  ]
})

export default [
  { name: 'index', filename: './src/index.js', formats: ['es'], needUglify: false, external: true },
  { name: 'index', filename: './src/index.js', formats: ['umd'] },
].map(conf)
