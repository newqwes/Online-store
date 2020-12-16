import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

const LogoWrapper = styled.div`
  background-image: url(${logo});
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-size: contain;
  background-repeat: no-repeat;
  a {
    display: block;
  }
`;

export default LogoWrapper;
