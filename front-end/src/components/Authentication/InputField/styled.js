import styled from 'styled-components';
import THEME_VARIANT from '../../../constants/themeVariant';

const InputFieldContent = styled.div.attrs(({ theme, themeVariant, isError }) => ({
  labelColor: theme.login.label.color[themeVariant],
  inputBorderColor: theme.login.input.border[isError ? THEME_VARIANT.warning : themeVariant],
}))`
  label {
    display: block;
    margin: 20px 15px 10px;
    font-size: 16px;
    color: ${({ labelColor }) => labelColor};
  }

  input {
    padding: 0.5rem 1rem;
    border: 1px solid ${({ inputBorderColor }) => inputBorderColor};

    margin-bottom: 10px;
  }

  span {
    position: absolute;
  }
`;

export default InputFieldContent;
