import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-basis: 15%;
  flex-direction: column;
  align-content: space-between;
  margin: 28px 14px;
  padding: 10px 25px;
  transition: 0.5s ease-out;
  border-radius: 20% 20px;
  background: ${(props) => props.theme.card.background[props.themeVariant]};
  box-shadow: 0 0 20px 5px ${(props) => props.theme.card.shadow[props.themeVariant]};

  &:hover {
    box-shadow: 0 0 20px 10px ${(props) => props.theme.card.hoverShadow[props.themeVariant]};
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &:last-child {
    margin-top: auto;
  }

  button {
    margin-left: 20px;
  }

  > * {
    display: flex;
    margin: 15px 5px;
  }
`;
