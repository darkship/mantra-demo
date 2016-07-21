const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Input from '../input';

describe('core.components.input', () => {
  it('created component with props',()=>{
  	const props={type:"text",className:"myClass",value:"this is my text"};
  	const el = shallow(<Input {...props} />);
  	expect(el.find('input')).to.have.length(1)
  	expect(el.find('input').props().value).to.equal("this is my text");	
  	expect(el.find('input').props().className).to.equal("myClass");	
  	expect(el.find('input').props().type).to.equal("text");	
  });
});
