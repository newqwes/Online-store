import styled from 'styled-components';

const LabelWrapper = styled.span`
  font-weight: bold;
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.theme.label.color[props.themeVariant]};

  ${(props) => props.shareStyles}
`;

export default LabelWrapper;
