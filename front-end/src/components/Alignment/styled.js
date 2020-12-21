import styled from 'styled-components';

const Alignment = styled.div`
  display: flex;
  align-items: ${(props) => props.position || 'center'};
  > * {
    margin-right: ${(props) => props.gap || 10}px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export default Alignment;
