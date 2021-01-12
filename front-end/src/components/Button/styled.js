import styled from 'styled-components';

const ButtonWrapper = styled.button`
  margin-left: 20px;
  padding: 6px 15px;
  border-radius: 10px;
  letter-spacing: 1px;
  background-color: ${(props) => props.theme.button.background[props.themeVariant]};
  border: 1px solid ${(props) => props.theme.button.border[props.themeVariant]};
  color: ${(props) => props.theme.button.color[props.themeVariant]};
  font-weight: 500;
  outline: none;
  transition: 0.1s ease;
  font-size: 13px;

  &:active {
    border-radius: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default ButtonWrapper;
