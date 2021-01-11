import styled from 'styled-components';

const AlignmentStyle = styled.div`
  display: flex;
  justify-content: ${(props) => props.horizontal};
  align-items: ${(props) => props.vertical};
  flex-direction: ${(props) => props.direction};

  ${(props) => props.shareStyles}
`;

export default AlignmentStyle;
