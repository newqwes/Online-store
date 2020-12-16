import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.iconSize}px 1fr;
  align-items: center;
  grid-gap: 1rem;
  letter-spacing: 0.15rem;
  h3 {
    color: ${(props) => props.textColor};
  }
`;

export default Wrapper;
