import styled from 'styled-components';

const LabelWrapper = styled.span`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.theme.label.color[props.themeVariant]};
  text-align: ${(props) => props.textAlign};
  margin-left: 20px;
  letter-spacing: 0.1em;
`;

export default LabelWrapper;
