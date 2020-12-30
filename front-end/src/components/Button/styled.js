import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: ${(props) => props.theme.button.primary}ff;
  border: 2px solid ${(props) => props.theme.button.primary};
  color: ${(props) => props.theme.label.light}df;
  padding: 8px 25px;
  border-radius: 10px;
  letter-spacing: 1px;
  font-weight: 500;
  outline: none;
  transition: 0.1s ease;

  &:active {
    background-color: ${(props) => props.theme.button.primary};
    border-radius: 20px;
    border: 2px solid ${(props) => props.theme.label.color};
  }

  &:hover {
    color: ${(props) => props.theme.label.light};
    background-color: ${(props) => props.theme.button.primary};
  }
`;

export default ButtonStyle;
