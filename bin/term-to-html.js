#!/usr/bin/env node

// generates HTML page from streamed STDOUT
// $ FORCE_COLOR=2 npx mocha spec.js --reporter spec | ./pass.js
// save or redirect the generated HTML file and get yourself a nice page.

const arg = require('arg')
const args = arg({
  '--theme': String,
})

const lightTheme = {
  newline: false,
  bg: '#fff',
  fg: '#111',
}

const darkTheme = {
  newline: false,
  bg: '#000',
  fg: '#eee',
}

const options = args['--theme'] === 'dark' ? darkTheme : lightTheme

const { termToHtml } = require('..')
termToHtml(options)
