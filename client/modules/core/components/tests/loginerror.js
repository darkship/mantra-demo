const {describe, it} = global;
import {expect} from 'chai';
import {mount} from 'enzyme';
import Loginerror from '../loginerror';

describe('core.components.loginerror', () => {

	
  it('handling undefined error',() => {
    const props={error:{error:400}};
    const error=mount(<Loginerror/>);
  	error.setProps(props)
  	expect(error.find('div').text()).to.not.equal('Wrong email/password combination');
  })
  it('handling no error',() => {
    const props={};
    const error=mount(<Loginerror/>);
    error.setProps(props)
    const fn=()=>{error.find('div').text();console.log("error.find('div').text()",error.find('div').text())}
    expect(fn).to.throw('This method is only meant to be run on single node. 0 found instead.');
  })
  it('handling not authorized ',() => {
  	const props={error:{error:401}};
    const error=mount(<Loginerror/>);
    error.setProps(props)
  	expect(error.find('div').text()).to.equal('Wrong email/password combination');
  })

});
