import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: sticky;
  display: flex;
  justify-content: space-around;
  top: -20px;
  width: 100%;
  height: 100px;
  background: ${({ themeVariant, theme }) => theme.background.color[themeVariant]};
  z-index: 2;

  svg {
    margin: 0 20px;
  }
`;

export default HeaderWrapper;
