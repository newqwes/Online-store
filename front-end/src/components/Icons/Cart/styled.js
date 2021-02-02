import styled from 'styled-components';

const CartWrapper = styled.div`
  position: relative;
  div {
    position: absolute;
    left: 50%;
    top: 40%;

    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 20px;
    min-height: 20px;
    background-color: white;
    border-radius: 50%;
    span {
      text-align: center;
      color: ${(props) => props.theme.icon.cart.color[props.themeVariant]};
      font-size: 13px;
    }
  }
`;

export default CartWrapper;
