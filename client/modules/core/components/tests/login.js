const {describe, it} = global;
import {expect} from 'chai';
import {mount} from 'enzyme';
import Login from '../login';

describe('core.components.login', () => {	

	
	const handler={handleSubmit:()=>{},handleEmail:()=>{},handlePassword:()=>{}};
	const props={email:'test@test.com',password:'password',...handler};
	const login=mount(<Login {...props}/>);
  it('should do something',()=>{
  	expect(login.find('div.login')).to.have.length(1)
  });
  if('should show email and password but no error',()=>{
  	login.setProps(props);
  	const el=login.find('div.login');
  	expect(el.find('div.error')).to.to.have.length(0);
  	expect(el.find('input[type="email"]').value).to.equal(props.email);
  	expect(el.find('input[type="password"]').value).to.equal(props.password);
  });
  if('should show email/password with an error',()=>{
	login.setProps({...handler,error:{error:401}});
  	const el=login.find('div.login');
  	expect(el.find('div.error')).to.to.have.length(1)
  	expect(el.find('input[type="email"]').value).to.equal('');
  	expect(el.find('input[type="password"]').value).to.equal('');
  });
});
