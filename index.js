const AnsiToHtml = require('ansi-to-html')
const escape = require('escape-html')

const lightTheme = {
  newline: false,
  bg: '#fff',
  fg: '#111',
  name: 'light',
}

const darkTheme = {
  newline: false,
  bg: '#000',
  fg: '#eee',
  name: 'dark',
}

const getHtmlStart = options => {
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
  return start
}

const htmlEnd = '\n</pre></body></html>'

const streams = options => {
  const convert = new AnsiToHtml(options)

  const start = getHtmlStart(options)
  console.log(start)

  process.stdin.setEncoding('utf8')
  process.stdin.on('data', function(chunk) {
    return process.stdout.write(convert.toHtml(escape(chunk)))
  })
  process.stdin.on('end', () => {
    console.log(htmlEnd)
  })
}

const strings = (s, theme = 'dark') => {
  const options = theme === 'dark' ? darkTheme : lightTheme
  const htmlStart = getHtmlStart(options)
  const convert = new AnsiToHtml(options)
  const converted = convert.toHtml(escape(s))
  return htmlStart.trim() + converted + htmlEnd
}

module.exports = {
  streams,
  strings,
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
}
