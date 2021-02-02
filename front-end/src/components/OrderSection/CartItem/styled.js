import styled from 'styled-components';

export const CartItemContent = styled.div`
  margin: 10px 20% 30px;
  background-color: white;
  padding: 10px;
  box-shadow: 0px 0px 20px -10px ${({ theme, themeVariant }) => theme.cart.shadow[themeVariant]};
`;

export const CartPhotoContent = styled.div`
  flex-basis: 15%;
  background: no-repeat center/70% url(${(props) => props.backgroundImage});
  height: 80px;
`;

export const CartDescriptionContent = styled.div`
  flex-basis: 65%;
  span {
    display: block;
    margin-top: 10px;
  }
`;

export const CartPriceContent = styled.div`
  flex-basis: 20%;
  span {
    min-width: 40px;
    text-align: center;
  }

  div {
    margin-top: 10px;
  }
  button {
    font-size: 16px;
    width: 30px;
    height: 30px;
  }
`;
