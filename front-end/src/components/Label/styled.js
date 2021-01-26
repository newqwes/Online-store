import styled from 'styled-components';

const LabelWrapper = styled.span`
  letter-spacing: 0.05em;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.theme.label.color[props.themeVariant]};
  text-align: ${(props) => props.textAlign};
`;

export default LabelWrapper;
