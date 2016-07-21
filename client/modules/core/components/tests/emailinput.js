const {describe, it} = global;
import {expect} from 'chai';
import {mount} from 'enzyme';
import Emailinput from '../emailinput';

describe('core.components.emailinput', () => {
  it('created component with props',()=>{
  	const props={type:"text",className:"myClass",value:"this is my text"};
  	const el = mount(<Emailinput {...props} />);
  	expect(el.find('input')).to.have.length(1)
  	expect(el.find('input').props().value).to.equal("this is my text");	
  	expect(el.find('input').props().className).to.equal("myClass");	
  	expect(el.find('input').props().type).to.equal("email");	
  });
});
