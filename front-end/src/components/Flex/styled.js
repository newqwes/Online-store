import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.direction};
  flex-basis: ${(props) => props.flexBasis};
`;

export default FlexWrapper;
