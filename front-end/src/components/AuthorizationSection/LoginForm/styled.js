import styled from 'styled-components';

export const LoginWrapper = styled.div``;

export const LoginContent = styled.div`
  margin-top: 10%;
  padding: 3% 5%;
  border-radius: 5%;
  border: 5px solid ${(props) => props.theme.card.hoverShadow[props.themeVariant]};
  background-color: ${(props) => props.theme.navbar.background[props.themeVariant]}50;

  label {
    display: block;
    margin: 15% 5% 4%;
    font-size: 16px;
    letter-spacing: 0.1em;
    color: ${(props) => props.theme.label.color[props.themeVariant]};
  }

  input {
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
    border: none;
  }

  button {
    display: block;
    margin: 15% auto 0;
    padding: 15px 25px;
    letter-spacing: 0.1em;
    font-size: 16px;
    font-weight: 400;
    border: none;

    background-color: ${(props) => props.theme.card.background[props.themeVariant]};
    color: ${(props) => props.theme.label.color[props.themeVariant]};

    &:active {
      border-radius: 35px;
    }
  }
`;
