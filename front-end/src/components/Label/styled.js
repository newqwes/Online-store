import styled from 'styled-components';

const Wrapper = styled.span`
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => props.theme.default.label.color};
  font-weight: bold;
`;

export default Wrapper;
