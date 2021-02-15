import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-basis: 19%;
  flex-direction: column;
  align-content: space-between;
  margin: 28px 15px;
  padding: 10px 25px;
  transition: 0.3s ease;
  border-radius: 20px;
  background: ${({ theme, themeVariant }) => theme.card.background[themeVariant]};
  box-shadow: 0 0 15px -5px ${({ theme, themeVariant }) => theme.card.shadow[themeVariant]};

  &:hover {
    box-shadow: 0 0 20px -5px ${({ theme, themeVariant }) => theme.card.hoverShadow[themeVariant]};
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
