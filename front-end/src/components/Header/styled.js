import styled from 'styled-components';
import WrapperStyle from '../../style/WrapperStyle';
import headerImg from '../../assets/images/headerImg.jpg';

export const HeaderBackground = styled.section`
  background: url(${headerImg}) no-repeat center top;
`;

export const HeaderWrapper = styled(WrapperStyle)`
  display: flex;
  justify-content: space-between;
`;
