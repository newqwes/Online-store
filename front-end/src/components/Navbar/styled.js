import styled from 'styled-components';

export const NavbarContent = styled.ul`
  max-width: ${(props) => props.pageWidth}px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.horizontally ? 'row' : 'column')};
  justify-content: space-between;
  padding: ${(props) => props.height}px 0;

  a {
    text-decoration: none;
    padding: ${(props) => props.height}px 16px;
    font-size: ${(props) => props.fontSize}px;
    letter-spacing: 0.1rem;
    color: ${(props) => props.theme.link.color[props.themevariant]};
    transition: 0.2s ease;
    font-weight: ${(props) => props.fontWeight};
    position: relative;

    &:hover {
      color: ${(props) => props.theme.link.hover[props.themevariant]};

      &::after {
        width: 100%;
      }
    }

    &:focus {
      color: ${(props) => props.theme.link.focus[props.themevariant]};

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
      height: 2px;
      background-color: ${(props) => props.theme.background.color[props.themevariant]};
      transition: 0.5s ease;
    }
  }
`;

export const NavbarWrapper = styled.nav``;
