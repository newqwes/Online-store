import styled from 'styled-components';
import WrapperStyle from '../../style/WrapperStyle';
import headerImg from '../../assets/images/headerImg.jpg';

export const HeaderStyle = styled.header`
  background: url(${headerImg}) no-repeat center top;
  height: 100px;
  display: flex;
`;

export const HeaderWrapper = styled(WrapperStyle)`
  display: flex;
  justify-content: space-between;
  > * {
    width: 100%;
  }
`;
