import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: ${(props) => props.theme.default.button[props.color]}ff;
  border: 2px solid ${(props) => props.theme.default.button[props.color]};
  color: ${(props) => props.theme.default.label[props.colorText]}df;
  padding: ${(props) => props.padding}rem ${(props) => props.padding * 3}rem;
  border-radius: 10px;
  letter-spacing: ${(props) => props.spacing}rem;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size}rem;
  outline: none;
  transition: 0.1s ease;

  &:active {
    background-color: ${(props) => props.theme.default.button[props.color]};
    border-radius: 20px;
    border: 2px solid ${(props) => props.theme.default.label[props.color]};
  }

  &:hover {
    color: ${(props) => props.theme.default.label[props.colorText]};
    background-color: ${(props) => props.theme.default.button[props.color]};
    cursor: pointer;
  }
`;

export default ButtonStyle;
