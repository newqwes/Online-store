import styled from 'styled-components';

const InputFieldContent = styled.div`
  margin-bottom: 30px;
  width: 100%;

  label {
    align-self: flex-start;
    margin-bottom: 10px;
    opacity: 0.8;
    color: ${({ theme, themeVariant }) => theme.order.label[themeVariant]};
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    transition: 0.3s ease;
    color: ${({ theme, themeVariant }) => theme.order.input[themeVariant]};
    border-bottom: 1px solid ${({ theme, themeVariant }) => theme.order.inputBorder[themeVariant]};
    opacity: 0.5;
    :focus {
      opacity: 0.9;
    }
    :visited {
      opacity: 0.9;
    }
  }
`;

export default InputFieldContent;
