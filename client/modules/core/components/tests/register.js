const {describe, it} = global;
import {expect} from 'chai';
import {shallow,mount} from 'enzyme';
import {spy, stub} from 'sinon';
import Register from '../register';

describe('core.components.register', () => {
	const handler={handleSubmit:spy(),handleEmail:spy(),handlePassword:spy(),handlePasswordVerification:spy()}
  it('should handle events',()=>{
  	const props={...handler};
  	const register=mount(<Register {...props}/>);

	register.find('form').simulate('submit');
	expect(handler.handleSubmit.callCount).to.equal(1)

	register.find('input[type="email"]').simulate('change');
	expect(handler.handleEmail.callCount).to.equal(1);

	register.find({placeholder:'Password'}).simulate('change');
	register.find({placeholder:'Password verification'}).simulate('change');
	expect(handler.handlePassword.callCount).to.equal(1);
	expect(handler.handlePasswordVerification.callCount).to.equal(1)
  });
  it('should display the right data and no error',()=>{
  	const props={email:'123',password:'1234',passwordverification:'123456',...handler};
  	const register=mount(<Register {...props}/>);

  	expect(register.find('input[type="email"]').props().value).to.equal(props.email);
  	expect(register.find({placeholder:'Password'}).props().value).to.equal(props.password);
  	expect(register.find({placeholder:'Password verification'}).props().value).to.equal(props.passwordverification);

  	expect(register.find('div.error')).to.have.length(0)
  })
  it('should display different errors',()=>{
  	const props={...handler,invalidemail:true,invalidpassword:true,verificationisko:true};
  	const register=mount(<Register {...props}/>);
  	expect(register.find('div.error')).to.have.length(3);

  	register.setProps({...handler,invalidemail:true,invalidpassword:true,verificationisko:false});
  	expect(register.find('div.error')).to.have.length(2);

  	register.setProps({...handler,invalidemail:true,invalidpassword:false,verificationisko:false});
  	expect(register.find('div.error')).to.have.length(1);

  	register.setProps({...handler,invalidemail:false,invalidpassword:false,verificationisko:true});
  	expect(register.find('div.error')).to.have.length(1);
  })
});
