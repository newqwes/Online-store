import styled from 'styled-components';

const LabelWrapper = styled.span`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.theme.label.color[props.themeVariant]};
  font-weight: bold;
`;

export default LabelWrapper;
