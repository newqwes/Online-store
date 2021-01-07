import styled from 'styled-components';

const AlignmentStyle = styled.div`
  display: flex;
  justify-content: ${(props) => props.horizontal};
  align-items: ${(props) => props.vertical};
`;

export default AlignmentStyle;
