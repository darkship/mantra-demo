import {expect} from 'chai';
import {mount} from 'enzyme';
import Passwordinput from '../passwordinput';

describe('core.components.passwordinput', () => {
  it('created component with props', () => {
    const props = {type: 'text', className: 'myClass', value: 'this is my text',
      onChange: () => null};
    const el = mount(<Passwordinput {...props} />);
    expect(el.find('input')).to.have.length(1);
    expect(el.find('input').props().value).to.equal('this is my text');
    expect(el.find('input').props().className).to.equal('myClass');
    expect(el.find('input').props().type).to.equal('password');
  });
});
