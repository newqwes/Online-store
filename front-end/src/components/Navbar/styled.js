import styled from 'styled-components';

export const NavbarItems = styled.ul`
  display: flex;
  flex-direction: ${({ horizontally }) => (horizontally ? 'row' : 'column')};
  justify-content: space-around;
  width: 100%;
  padding: 10px 0;
  background-color: ${({ theme, themeVariant }) => theme.navbar.background[themeVariant]};

  a {
    text-decoration: none;
    padding: 12px 16px;
    font-size: 16px;
    letter-spacing: 0.1rem;
    color: ${({ theme, themeVariant }) => theme.navbar.color[themeVariant]};
    transition: 0.2s ease;
    font-weight: bold;
    position: relative;

    &:hover {
      color: ${({ theme, themeVariant }) => theme.link.hover[themeVariant]};

      &::after {
        width: 100%;
      }
    }

    &:focus {
      color: ${({ theme, themeVariant }) => theme.link.focus[themeVariant]};

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
      background-color: ${({ theme, themeVariant }) => theme.link.line[themeVariant]};
      transition: 0.2s ease;
    }
  }
`;

export const NavbarWrapper = styled.nav`
  position: sticky;
  z-index: 1;
  display: flex;
  top: 60px;
  justify-content: center;
  box-shadow: 0 4px 10px ${({ theme, themeVariant }) => theme.navbar.boxShadow[themeVariant]};
`;
