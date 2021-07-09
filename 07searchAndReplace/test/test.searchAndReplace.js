const chai = require('chai');
const expect = chai.expect;
const myReplace = require('../07searchAndReplace');

describe('searchAndReplace Test Suit', () => {
  it('myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.', () => {
    const result = myReplace('Let us go to the store', 'store', 'mall');
    expect(result).to.be.eql('Let us go to the mall');
  });

  it('myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.', () => {
    const result = myReplace(
      'He is Sleeping on the couch',
      'Sleeping',
      'sitting'
    );
    expect(result).to.be.eql('He is Sitting on the couch');
  });

  it('myReplace("I think we should look up there", "up", "Down) should return the string I think we should look down there.', () => {
    const result = myReplace('I think we should look up there', 'up', 'Down');
    expect(result).to.be.eql('I think we should look down there');
  });

  it('myReplace("This has a spellngi error", "spellngi", "spelling") should return the string He is Sitting on the couch.', () => {
    const result = myReplace(
      'This has a spellngi error',
      'spellngi',
      'spelling'
    );
    expect(result).to.be.eql('This has a spelling error');
  });

  it('myReplace("His name is tom", "Tom", "john") should return the string his name is John.', () => {
    const result = myReplace('His name is Tom', 'Tom', 'john');
    expect(result).to.be.eql('His name is John');
  });

  it('myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms.', () => {
    const result = myReplace(
      'Let us get back to more Coding',
      'Coding',
      'algorithms'
    );
    expect(result).to.be.eql('Let us get back to more Algorithms');
  });
});
