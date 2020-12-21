import styled from 'styled-components';

const LabelStyle = styled.span`
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => props.theme.default.label.color};
  font-weight: bold;
`;

export default LabelStyle;
