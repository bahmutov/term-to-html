const AnsiToHtml = require('ansi-to-html')
const escape = require('escape-html')

const termToHtml = options => {
  const convert = new AnsiToHtml(options)

  const start = `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <style>
        body {
          font-family: "Courier New", Courier, monospace;
          padding: 0 1em;
          line-height: 1.4;
          color: ${options.fg};
          background-color: ${options.bg};
        }
        pre {
          padding: 0 0;
          margin: 0 0;
          font-family: "Courier New", Courier, monospace;
        }
      </style>
    </head>
    <body><pre>\n
  `

  console.log(start)

  process.stdin.setEncoding('utf8')
  process.stdin.on('data', function(chunk) {
    return process.stdout.write(convert.toHtml(escape(chunk)))
  })
  process.stdin.on('end', () => {
    console.log('\n</pre></body></html>')
  })
}

module.exports = { termToHtml }
