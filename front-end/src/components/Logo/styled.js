import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

const LogoWrapper = styled.div`
  background-image: url(${logo});
  width: ${(props) => props.width}px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 1%;
`;

export default LogoWrapper;
