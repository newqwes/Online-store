import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-basis: 18%;
  flex-direction: column;
  align-content: space-between;
  margin-top: 40px;
  padding: 25px;
  transition: 0.5s ease-out;
  border-radius: 20% 20px;
  background: ${(props) => props.theme.cardItem.background[props.themeVariant]};
  box-shadow: 0 0 20px 5px ${(props) => props.theme.cardItem.shadow[props.themeVariant]};

  &:hover {
    box-shadow: 0 0 20px 10px ${(props) => props.theme.cardItem.hoverShadow[props.themeVariant]};
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &:last-child {
    margin-top: auto;
  }

  > * {
    display: flex;
    margin: 15px 5px;
  }
`;
