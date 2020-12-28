import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: ${(props) => props.theme.button[props.color]}ff;
  border: 2px solid ${(props) => props.theme.button[props.color]};
  color: ${(props) => props.theme.label.color}df;
  padding: 0.8rem 2.5rem;
  border-radius: 10px;
  letter-spacing: 0.1rem;
  font-weight: 500;
  outline: none;
  transition: 0.1s ease;

  &:active {
    background-color: ${(props) => props.theme.button[props.color]};
    border-radius: 20px;
    border: 2px solid ${(props) => props.theme.label.color};
  }

  &:hover {
    color: ${(props) => props.theme.label.color};
    background-color: ${(props) => props.theme.button[props.color]};
  }
`;

export default ButtonStyle;
