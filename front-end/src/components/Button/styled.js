import styled from 'styled-components';

const ButtonWrapper = styled.button`
  margin: 0 20px;
  padding: 5px 8px;
  letter-spacing: 1px;
  background-color: ${(props) => props.theme.button.background[props.themeVariant]};
  border: 1px solid ${(props) => props.theme.button.background[props.themeVariant]};
  color: ${(props) => props.theme.button.color[props.themeVariant]};
  font-weight: 500;
  outline: none;
  font-size: 12px;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }

  &:active {
    border: 1px solid ${(props) => props.theme.button.border[props.themeVariant]};
  }
`;

export default ButtonWrapper;
