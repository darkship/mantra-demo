import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../login';

describe('core.actions.login', () => {
  it('login should log in with Meteor', () => {
    const Meteor = {
      loginWithPassword(user, pwd, cb) {
        cb && cb('error');
      },
    };
    const Store = {dispatch: spy(), getState: stub().returns(
    {LoginReducer: {email: '123', password: '123'}})};
    actions.login({Meteor, Store});
    expect(Store.dispatch.callCount).to.equal(2);
    expect(Store.dispatch.calledWith({type: 'SET_ISLOGININ'})).to.be.true;
    expect(Store.dispatch.calledWith({type: 'SET_ERROR', error: 'error'}))
    .to.be.true;
  });

  it('setEmail should store email', () => {
    const email = '123';
    const Store = {dispatch: spy()};
    actions.setEmail({Store}, email);
    expect(Store.dispatch.callCount).to.equal(1);
    expect(Store.dispatch.calledWith({type: 'SET_EMAIL', email})).to.be.true;
  });

  it('setPassword should store email', () => {
    const password = '123';
    const Store = {dispatch: spy()};
    actions.setPassword({Store}, password);
    expect(Store.dispatch.callCount).to.equal(1);
    expect(Store.dispatch.calledWith({type: 'SET_PASSWORD', password}))
    .to.be.true;
  });
});
