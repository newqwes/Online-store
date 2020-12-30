import styled from 'styled-components';

const LabelStyle = styled.span`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.theme.label.primary};
  font-weight: bold;
`;

export default LabelStyle;
