import styled from 'styled-components';

export const NavbarItems = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.horizontally ? 'row' : 'column')};
  justify-content: space-around;
  width: 100%;
  padding: 10px 0;
  background-color: ${(props) => props.theme.navbar.background[props.themeVariant]};

  a {
    text-decoration: none;
    padding: 12px 16px;
    font-size: 16px;
    letter-spacing: 0.1rem;
    color: ${(props) => props.theme.navbar.color[props.themeVariant]};
    transition: 0.2s ease;
    font-weight: bold;
    position: relative;

    &:hover {
      color: ${(props) => props.theme.link.hover[props.themeVariant]};

      &::after {
        width: 100%;
      }
    }

    &:focus {
      color: ${(props) => props.theme.link.focus[props.themeVariant]};

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
      bottom: 0;
      border-radius: 15px 15px 0 0;
      height: 8px;
      background-color: ${(props) => props.theme.navbar.hoverBackground[props.themeVariant]};
      transition: 0.5s ease;
    }
  }
`;

export const NavbarWrapper = styled.nav`
  position: sticky;
  display: flex;
  top: 60px;
  justify-content: center;
`;
