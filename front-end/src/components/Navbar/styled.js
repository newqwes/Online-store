import styled, { css } from 'styled-components';

export const NavbarItems = styled.ul(
  ({
    theme: { navbar, link },
    themeVariant,
    horizontally,
    flexDirection = horizontally ? 'row' : 'column',
    backgroundColor = navbar.background[themeVariant],
    linkColor = navbar.color[themeVariant],
    linkColorHover = link.hover[themeVariant],
    linkColorFocus = link.focus[themeVariant],
    bottomLineColor = link.line[themeVariant],
  }) => css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: space-around;
    width: 100%;
    padding: 10px 0;
    background-color: ${backgroundColor};

    a {
      text-decoration: none;
      padding: 12px 16px;
      font-size: 16px;
      letter-spacing: 0.1rem;
      color: ${linkColor};
      transition: 0.2s ease;
      font-weight: bold;
      position: relative;

      &:hover {
        color: ${linkColorHover};

        &::after {
          width: 100%;
        }
      }

      &:focus {
        color: ${linkColorFocus};

        &::after {
          width: 100%;
        }
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 0;
        left: 0;
        bottom: 2px;
        height: 4px;
        background-color: ${bottomLineColor};
        transition: 0.2s ease;
      }
    }
  `,
);

export const NavbarWrapper = styled.nav(
  ({ theme: { navbar }, themeVariant, boxShadow = navbar.boxShadow[themeVariant] }) => css`
    position: sticky;
    z-index: 1;
    display: flex;
    top: 60px;
    justify-content: center;
    box-shadow: 0 4px 10px ${boxShadow};
  `,
);
