const {describe, it} = global;
import {expect} from 'chai';
import {mount} from 'enzyme';
import Loginerror from '../loginerror';

describe('core.components.loginerror', () => {

	const props={error:{error:401}};
	const error=mount(<Loginerror/>);
  it('handling not authorized error',() => {
  	error.setProps({})
  	expect(error.find('div').text()).to.not.equal('Wrong email/password combination');
  })
  it('handling not authorized error',() => {
  	error.setProps(props)
  	expect(error.find('div').text()).to.equal('Wrong email/password combination');
  })

});
