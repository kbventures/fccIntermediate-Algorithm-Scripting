const chai = require('chai');
const expect = chai.expect;
const convertHTML = require('../convertHTMLentities');

describe('Convert HTML Entities Test Suite', () => {
  it('convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.', () => {
    const result = convertHTML('Dolce & Gabbana');
    console.log(result);
    expect(result).to.be.eql('Dolce &amp; Gabbana');
  });

  it('convertHTML("Hamburgers < Pizza < Tacos") should Dreturn the string Hamburgers &lt; Pizza &lt; Tacos.', () => {
    const result = convertHTML('Hamburgers < Pizza < Tacos');
    expect(result).to.be.eql('Hamburgers &lt; Pizza &lt; Tacos');
  });

  it('convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.', () => {
    const result = convertHTML('Sixty > twelve');
    expect(result).to.be.eql('Sixty &gt; twelve');
  });

  it('convertHTML(\'Stuff in "quotation marks"\') should return the string Stuff in &quot;quotation marks&quot;.', () => {
    const result = convertHTML('Stuff in "quotation marks"');
    expect(result).to.be.eql('Stuff in &quot;quotation marks&quot;');
  });

  it('convertHTML("Schindler\'s List") should return the string Schindler&apos;s List.', () => {
    const result = convertHTML("Schindler's List");
    expect(result).to.be.eql('Schindler&apos;s List');
  });

  it('convertHTML("<>") should return the string &lt;&gt;.', () => {
    const result = convertHTML('<>');
    expect(result).to.be.eql('&lt;&gt;');
  });

  it('convertHTML("abc") should return the string abc.', () => {
    const result = convertHTML('abc');
    expect(result).to.be.eql('abc');
  });
});
