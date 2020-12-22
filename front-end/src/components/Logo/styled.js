import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

const LogoWrapper = styled.div`
  background-image: url(${logo});
  background-size: ${(props) => props.width}px;
  background-repeat: no-repeat;
  background-position-y: ${(props) => props.position}%;
`;

export default LogoWrapper;
