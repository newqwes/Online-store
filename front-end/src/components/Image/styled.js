import styled from 'styled-components';

const ImageStyle = styled.div`
  text-align: center;
  img {
    width: ${(props) => props.size}%;
    max-width: 300px;
  }
`;

export default ImageStyle;
