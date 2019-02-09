import urlImport from 'rollup-plugin-url-import'

export default {
  input: 'https://raw.githubusercontent.com/denoland/deno_std/master/prettier/vendor/parser_typescript.js',
  plugins: [
    urlImport()
  ],
  output: [
    {
      format: 'esm',
      file: 'output.js'
    }
  ]
}
