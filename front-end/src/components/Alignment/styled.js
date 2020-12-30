import styled from 'styled-components';

const AlignmentStyle = styled.div`
  display: flex;
  justify-content: ${(props) => props.horizontal};
  align-items: ${(props) => props.vertical};

  > * {
    margin-right: ${(props) => props.gap}px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default AlignmentStyle;
