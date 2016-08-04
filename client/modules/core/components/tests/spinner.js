const {describe, it} = global;
import {expect} from 'chai';
import {mount} from 'enzyme';
import Spinner from '../spinner';
import StatelessWrapper from '/lib/utils/StatelessWrapper';

describe('core.components.spinner', () => {
  it('should do something',()=>{
  	const SpinnerWrapped=StatelessWrapper(Spinner)
  	const el=mount(<SpinnerWrapped/>);
  	expect(el.find('div.spinner')).to.have.length(1);
  });
});
