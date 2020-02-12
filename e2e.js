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
    const text = result.stdout.replace(/\(10\d\dms\)/g, '(1000ms)')
    snapshot('generated html', text)
  })
})
