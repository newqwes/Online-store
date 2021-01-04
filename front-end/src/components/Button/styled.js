import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: ${(props) => props.theme.button[props.btnColor]};
  border: 2px solid ${(props) => props.theme.button[props.btnColor]};
  color: ${(props) => props.theme.label[props.textColor]};
  padding: 8px 25px;
  border-radius: 10px;
  letter-spacing: 1px;
  font-weight: 500;
  outline: none;
  transition: 0.1s ease;

  &:active {
    border-radius: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default ButtonStyle;
