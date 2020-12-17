import styled from 'styled-components';

const AlignmentWrapper = styled.div`
  display: flex;
  align-items: center;
  > * {
    padding-right: ${(props) => props.gap || 5}px;
    &:last-child {
      padding-right: 0;
    }
  }
`;

export default AlignmentWrapper;
