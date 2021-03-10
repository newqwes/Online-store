import styled, { css } from 'styled-components';

const HeaderWrapper = styled.header(
  ({
    theme: { background },
    themeVariant,
    backgroundColor = background.color[themeVariant],
  }) => css`
    position: sticky;
    z-index: 1;
    display: flex;
    justify-content: space-around;
    top: -20px;
    width: 100%;
    height: 100px;
    background: ${backgroundColor};

    svg {
      margin: 0 20px;
    }
  `,
);

export default HeaderWrapper;
