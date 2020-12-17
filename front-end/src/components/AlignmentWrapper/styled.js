import styled from 'styled-components';

const AlignmentWrapper = styled.div`
  display: flex;
  align-items: center;
  > * {
    &:first-child {
      padding-right: ${(props) => props.gap || 5}px;
    }
  }
`;

export default AlignmentWrapper;
