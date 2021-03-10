import styled, { css } from 'styled-components';

const LabelWrapper = styled.span(
  ({
    theme: { label },
    themeVariant,
    fontWeight,
    fontSize,
    textAlign,
    textColor = label.color[themeVariant],
  }) => css`
    letter-spacing: 0.05em;
    font-weight: ${fontWeight};
    font-size: ${fontSize}px;
    color: ${textColor};
    text-align: ${textAlign};
  `,
);

export default LabelWrapper;
