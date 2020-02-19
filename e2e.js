const execa = require('execa')
const snapshot = require('snap-shot-it')
it('works', () => {
  return execa('npx mocha spec.js --reporter spec | bin/term-to-html.js', {
    shell: true,
    env: {
      FORCE_COLOR: 2,
    },
  }).then(result => {
    // replace Mocha's time duration warnings with same value
    const duration1xxx = /\(10\d\dms\)/g
    const duration9xx = /\(9\d\dms\)/g
    const text = result.stdout
      .replace(duration1xxx, '(1000ms)')
      .replace(duration9xx, '(1000ms)')
    snapshot('generated html', text)
  })
})
