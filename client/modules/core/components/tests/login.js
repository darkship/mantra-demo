const {describe, it} = global;
import {expect} from 'chai';
import {spy} from 'sinon';
import {mount} from 'enzyme';
import Login from '../login';


describe('core.components.login', () => {
  const handler = {handleSubmit: spy(), handleEmail: spy(),
    handlePassword: spy()};
  const props = {email: 'test@test.com', password: 'password', ...handler};


  it('should do something', () => {
    const login = mount(<Login {...props}/>);
    expect(login.find('div.login')).to.have.length(1);
  });
  it('should show email and password but no error', () => {
    const login = mount(<Login {...props}/>);
    const el = login.find('div.login');
    expect(el.find('div.error')).to.to.have.length(0);
    expect(el.find('input[type="email"]').props().value).to.equal(props.email);
    expect(el.find('input[type="password"]').props().value)
      .to.equal(props.password);
  });
  it('should show email/password with an error', () => {
    const p = {error: {error: 401}};
    const login = mount(<Login {...p}/>);

    const el = login.find('div.login');
    expect(el.find('div.error')).to.to.have.length(1);
    expect(el.find('input[type="email"]').props().value).to.be.undefined;
    expect(el.find('input[type="password"]').props().value).be.undefined;
  });
  it('should handle events', () => {
    const login = mount(<Login {...handler}/>);
    login.find('form').simulate('submit');
    expect(handler.handleSubmit.callCount).to.equal(1);
    login.find('input[type="email"]').simulate('change');
    expect(handler.handleEmail.callCount).to.equal(1);

    login.find('input[type="password"]').simulate('change');
    expect(handler.handlePassword.callCount).to.equal(1);
  });
});
