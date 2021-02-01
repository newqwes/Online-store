import styled from 'styled-components';

export const CartItemContent = styled.div`
  margin: 20px 20%;
  background-color: white;
  padding: 10px;
`;

export const CartPhotoContent = styled.div`
  flex-basis: 15%;
  background: no-repeat center/65% url(${(props) => props.backgroundImage});
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
  div {
    margin-top: 10px;
  }
`;
