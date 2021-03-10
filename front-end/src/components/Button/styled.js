import styled, { css } from 'styled-components';

const ButtonWrapper = styled.button(
  ({
    theme: { button },
    themeVariant,
    textColor = button.color[themeVariant],
    backgroundColor = button.background[themeVariant],
    borderColor = button.border[themeVariant],
    borderColorActive = button.borderActive[themeVariant],
  }) => css`
    padding: 5px 8px;
    letter-spacing: 1px;
    background-color: ${backgroundColor};
    border: 1px solid ${borderColor};
    border-radius: 5px;

    color: ${textColor};
    font-weight: 500;
    outline: none;
    font-size: 12px;
    white-space: nowrap;

    &:hover {
      cursor: pointer;
    }

    &:active {
      border: 1px solid ${borderColorActive};
    }
  `,
);

export default ButtonWrapper;
