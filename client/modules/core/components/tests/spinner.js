import {expect} from 'chai';
import {mount} from 'enzyme';
import Spinner from '../spinner';
import statelessWrapper from '/lib/utils/StatelessWrapper';

describe('core.components.spinner', () => {
  it('should do something', () => {
    const SpinnerWrapped = statelessWrapper(Spinner);
    const el = mount(<SpinnerWrapped/>);
    expect(el.find('div.spinner')).to.have.length(1);
  });
});
