const {describe, it} = global;
import {expect,spy} from 'chai';

import {shallow} from 'enzyme';
import Input from '../input';
import TestUtils from 'react-addons-test-utils'

describe('core.components.input', () => {
	const props={type:'text',className:'myClass',value:'this is my text'};
  	const el = shallow(<Input {...props} />);
  it('created component with props',()=>{
  	expect(el.find('input')).to.have.length(1)
  	expect(el.find('input').props().value).to.equal('this is my text');	
  	expect(el.find('input').props().className).to.equal('myClass');	
  	expect(el.find('input').props().type).to.equal('text');	
  });

  xit('onChange',(done)=>{
  	const onChange = (v)=>{
  		expect(v).to.equal('abc');
  		done();
  	};
  	const props={type:'text',value:'abc',onChange};
  	el.setProps(props);

  	TestUtils.Simulate.change(el);//doen't work ?
  });
});
