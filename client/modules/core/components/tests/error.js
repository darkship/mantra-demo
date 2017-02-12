const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Error from '../error';

describe('core.components.error', () => {
  it('handling custom error messages', () => {
    const props = {msg: 'custom message'};
    const error = shallow(<Error {...props}/>);
    expect(error.find('div')).to.have.length(1);
    expect(error.find('div').text()).to.equal(props.msg);
  });

  it('handling default error messages', () => {
    const props = {msg: ''};
    const error = shallow(<Error {...props}/>);
    expect(error.find('div')).to.have.length(1);
    expect(error.find('div').text()).to.equal('An error occurred.');

    error.setProps({msg: null});
    expect(error.find('div').text()).to.equal('An error occurred.');
  });
});
