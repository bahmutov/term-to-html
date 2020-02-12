#!/usr/bin/env node

// generates HTML page from streamed STDOUT
// $ FORCE_COLOR=2 npx mocha spec.js --reporter spec | ./pass.js
// save or redirect the generated HTML file and get yourself a nice page.

// assuming the browser page is white
// TODO allow passing these options via CLI arguments
const options = {
  newline: false,
  bg: '#fff',
  fg: '#111',
}

const { termToHtml } = require('..')
termToHtml(options)
