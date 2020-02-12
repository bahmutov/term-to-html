const execa = require('execa')
const snapshot = require('snap-shot-it')
it('works', () => {
  return execa('npx mocha spec.js --reporter spec | bin/term-to-html.js', {
    shell: true,
    env: {
      FORCE_COLOR: 2,
    },
  }).then(result => {
    snapshot('generated html', result.stdout)
  })
})
