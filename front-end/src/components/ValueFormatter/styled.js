import styled, { css } from 'styled-components';

const ValueFormatterWrapper = styled.span(
  ({
    theme: { label },
    themeVariant,
    fontSize,
    textAlign,
    fontWeight,
    textColor = label.color[themeVariant],
  }) => css`
    letter-spacing: 0.1em;
    font-size: ${fontSize}px;
    text-align: ${textAlign};
    font-weight: ${fontWeight};
    color: ${textColor};
  `,
);

export default ValueFormatterWrapper;
