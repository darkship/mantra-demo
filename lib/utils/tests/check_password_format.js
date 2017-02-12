const {describe, it} = global;
import {expect} from 'chai';
// import {spy, stub} from 'sinon';
import checkPasswordFormat from '../check_password_format';

describe('lib.utils.check_password_format', () => {
  it('check if string is email', ()=>{
    expect(checkPasswordFormat('1')).to.be.false;
    expect(checkPasswordFormat('123456')).to.be.true;
  });
});
