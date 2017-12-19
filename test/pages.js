const {expect} = require('chai');

const app = require('../src');

// http://www.bombmanual.com/manual/1/pdf/Bomb-Defusal-Manual_1.pdf
describe('#Pages', function () {
  it('On the Subject of Wires' , async function () {
    await app.generateManual('./pages/wires.md', {
      outputPdf: './pages/wires.pdf'
    });
  });
});
