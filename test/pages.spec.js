const {expect} = require('chai');

const app = require('../src');

// http://www.bombmanual.com/manual/1/pdf/Bomb-Defusal-Manual_1.pdf
describe('#Pages', function () {
  it('On the Subject of Wires' , async function () {
    await app.generateManual('./pages/wires.md', {
      name: 'Wires',
      version: 'v. 1',
      outputPdf: './pages/wires.pdf'
    });
  });

  it('On the Subject of The Button' , async function () {
    await app.generateManual('./pages/the_button.md', {
      name: 'The Button',
      version: 'v. 1',
      outputPdf: './pages/the_button.pdf'
    });
  });
});
