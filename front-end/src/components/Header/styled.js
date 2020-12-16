import styled from 'styled-components';
import WrapperStyle from '../../style/WrapperStyle';
import headerImg from '../../assets/images/headerImg.jpg';

export const HeaderStyle = styled.section`
  background: url(${headerImg}) no-repeat center top;
`;

export const HeaderWrapper = styled(WrapperStyle)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
`;
