import styled from 'styled-components';

const ImageWrapper = styled.div`
  text-align: center;

  img {
    width: ${(props) => props.size}%;
    max-width: 300px;
  }
`;

export default ImageWrapper;
