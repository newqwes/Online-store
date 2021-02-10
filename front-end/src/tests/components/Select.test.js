import React from 'react';
import { render } from 'enzyme';

import Select from '../../components/Select';

const initProps = {
  unitSign: '$',
  options: [{ weight: 12 }, { weight: 23 }],
  onChange: () => {},
};

const setUp = (props) => render(<Select {...props} />);

describe('should render Select component', () => {
  const component = setUp(initProps);

  it('should render 2 option', () => {
    const option = component.find('option');

    expect(option).toHaveLength(2);
  });
});
