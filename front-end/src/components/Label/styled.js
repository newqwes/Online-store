import styled from 'styled-components';

const LabelStyle = styled.span`
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => props.theme.default.label[props.color]};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.align};
  letter-spacing: 0.05rem;
`;

export default LabelStyle;
