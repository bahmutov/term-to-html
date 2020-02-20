const execa = require('execa')
const snapshot = require('snap-shot-it')
const chalk = require('chalk')
const termToHtml = require('.')

/**
 * Replace Mocha's time duration warnings with same value
 * @param {string} s output from Mocha converted to HTML
 * @returns {string} sanitized result
 */
const sanitize = s => {
  const duration1xxx = /\(10\d\dms\)/g
  const duration9xx = /\(9\d\dms\)/g
  const value = '(1000ms)'
  return s.replace(duration1xxx, value).replace(duration9xx, value)
}

it('works', () => {
  return execa('npx mocha spec.js --reporter spec | bin/term-to-html.js', {
    shell: true,
    env: {
      FORCE_COLOR: 2,
    },
  }).then(result => {
    const text = sanitize(result.stdout)
    snapshot('generated html', text)
  })
})

it('supports dark theme', () => {
  return execa(
    'npx mocha spec.js --reporter spec | bin/term-to-html.js --theme dark',
    {
      shell: true,
      env: {
        FORCE_COLOR: 2,
      },
    },
  ).then(result => {
    const text = sanitize(result.stdout)
    snapshot('html with dark theme', text)
  })
})

it('can be used as a module', () => {
  const ansi =
    chalk.red('red') + ' ' + chalk.cyan('cyan') + '\n' + 'second line'
  const html = termToHtml.strings(ansi)
  snapshot('string to string dark theme', html)
})

it('has themes', () => {
  snapshot('themes', termToHtml.themes)
})
