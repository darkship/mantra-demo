const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import checkIfEmail from '../check_if_email';

describe('lib.utils.checkIfEmail', () => {
  it('check if string is email',()=>{
    expect(checkIfEmail('123@3.com')).to.be.true;
    expect(checkIfEmail('123@123.co')).to.be.true;
    expect(checkIfEmail('1@.co')).to.be.false;
    expect(checkIfEmail('123123.co')).to.be.false;
    expect(checkIfEmail('123123co')).to.be.false;
  });

});