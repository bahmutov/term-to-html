var Table = require('cli-table3');
const delay = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms))
describe('example', () => {
  it('works A', () => delay())
  it('works B', () => delay())
  it('works C', () => delay())
  it('skips D')
  it('has brackets < and >', () => {
    console.log('hello <there>!')
  })
  it('has a table', () => {
    // instantiate
    var table = new Table({
      head: ['TH 1 label', 'TH 2 label']
    , colWidths: [20, 20]
    });

    // table is an Array, so you can `push`, `unshift`, `splice` and friends
    table.push(
      ['First value', 'Second value']
    , ['First value', 'Second value']
    );

    console.log(table.toString());
  })
})
