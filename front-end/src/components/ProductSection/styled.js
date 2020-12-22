import styled from 'styled-components';
import WrapperStyle from '../../style/WrapperStyle';
import pizzaImage from '../../assets/images/pizza-image.png';
import pizzaBg from '../../assets/images/pizza-bg.jpg';

export const ProductSectionStyle = styled.section`
  background: url(${pizzaImage}) right bottom no-repeat, url(${pizzaBg});
`;

export const ProductSectionWrapper = styled(WrapperStyle)``;
