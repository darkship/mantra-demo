const {describe, it} = global;
import {expect} from 'chai';

import {shallow, mount} from 'enzyme';
import Input from '../input';
// import TestUtils from 'react-addons-test-utils';

describe('core.components.input', () => {
  const props = {type: 'text', className: 'myClass', value: 'this is my text'};
  const el = shallow(<Input {...props} />);
  it('created component with props', () => {
    expect(el.find('input')).to.have.length(1);
    expect(el.find('input').props().value).to.equal('this is my text');
    expect(el.find('input').props().className).to.equal('myClass');
    expect(el.find('input').props().type).to.equal('text');
  });

  it('onChange', (done) => {
    const onChange = (v) => {
      expect(v).to.equal('abc');
      done();
    };
    const props = {type: 'text', value: 'abc', onChange};
    const el = mount(<Input {...props} />);

    expect(el.find('input')).to.have.length(1);
    el.find('input').simulate('change');
  });
});
