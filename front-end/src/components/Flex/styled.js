import styled from 'styled-components';

const FlexWrapper = styled.div`
  justify-content: ${(props) => props.horizontal};
  align-items: ${(props) => props.vertical};
  flex-direction: ${(props) => props.direction};
  display: flex;
`;

export default FlexWrapper;
