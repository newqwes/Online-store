import styled from 'styled-components';

const ValueFormatterWrapper = styled.span`
  letter-spacing: 0.1em;
  font-size: ${props => props.fontSize}px;
  text-align: ${props => props.textAlign};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.theme.label.color[props.themeVariant]};
`;

export default ValueFormatterWrapper;
