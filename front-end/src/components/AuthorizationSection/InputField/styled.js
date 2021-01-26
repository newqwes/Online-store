import styled from 'styled-components';

const InputFieldContent = styled.div`
  label {
    display: block;
    margin: 30px 15px 10px;
    font-size: 16px;
    color: ${({ theme, themeVariant }) => theme.login.label.color[themeVariant]};
  }

  input {
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme, themeVariant }) => theme.login.input.border[themeVariant]};
    margin-bottom: 10px;
  }

  span {
    position: absolute;
  }
`;

export default InputFieldContent;
