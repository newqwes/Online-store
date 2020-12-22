import styled from 'styled-components';

const Alignment = styled.div`
  display: flex;
  justify-content: ${(props) => props.positionX || 'center'};
  align-items: ${(props) => props.positionY || 'center'};
  > * {
    margin-right: ${(props) => props.gap || 15}px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export default Alignment;
