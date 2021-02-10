import React from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow } from 'enzyme';

import theme from '../../style/theme';

import Button from '../../components/Button';

const setUp = (props) =>
  shallow(
    <ThemeProvider theme={theme.light}>
      <Button {...props} />
    </ThemeProvider>
  );

describe('should render Button component', () => {
  let component;

  const text = 'Войти';
  const onClick = () => console.log('Hello');

  beforeEach(() => {
    component = setUp({ onClick, text });
  });

  it('should contain text in button', () => {
    const button = component.find(Button).props();

    expect(button.text).toEqual(text);
  });

  it('should contain only one button tag', () => {
    const wrapper = component.length;

    expect(wrapper).toBe(1);
  });

  it('onClick default', () => {
    const result = Button.defaultProps.onClick();

    expect(result).toBe(undefined);
  });
});
