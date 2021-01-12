import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background-color: ${(props) => props.theme.button.background[props.themeVariant]};
  border: 1px solid ${(props) => props.theme.button.border[props.themeVariant]};
  color: ${(props) => props.theme.button.color[props.themeVariant]};
  border-radius: 10px;
  letter-spacing: 1px;
  font-weight: 500;
  outline: none;
  transition: 0.1s ease;
  padding: 6px 15px;
  font-size: 13px;
  margin-left: 20px;

  &:active {
    border-radius: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default ButtonWrapper;
