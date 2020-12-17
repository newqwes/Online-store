import styled from 'styled-components';

const AlignmentWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 20%;
  > * {
    margin-right: ${(props) => props.gap || 10}px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export default AlignmentWrapper;
