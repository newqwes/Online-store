import styled from 'styled-components';

export const ProfileMenuWrapper = styled.aside.attrs(({ theme, themeVariant }) => ({
  background: theme.profile.aside.background[themeVariant],
  activeColor: theme.profile.aside.color.active[themeVariant],
  hoverColor: theme.profile.aside.color.hover[themeVariant],
}))`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  min-height: 300px;
  width: ${({ active }) => (active ? '180px' : '0')};
  text-align: center;
  transition: 0.3s ease;
  background-color: ${({ background }) => background};

  ul {
    display: block;
    padding-top: 70px;

    a {
      font-weight: normal;
      line-height: 40px;
      cursor: pointer;
      margin-top: 20px;
      font-size: ${({ active }) => (active ? '18px' : '0')};
      transition: 0.2s ease;

      &:hover {
        color: ${({ hoverColor }) => hoverColor};
      }
    }

    .active,
    .active:hover {
      color: ${({ activeColor }) => activeColor};
    }
  }
`;

export const HamburgerWrapper = styled.div.attrs(({ theme, themeVariant }) => ({
  activeColor: theme.profile.aside.hamburger.active[themeVariant],
  hoverColor: theme.profile.aside.hamburger.hover[themeVariant],
}))`
  position: absolute;
  right: 0px;
  top: 40px;
  cursor: pointer;
  transition: 0.3s ease;

  fill: ${({ activeColor }) => activeColor};

  &:hover {
    fill: ${({ hoverColor }) => hoverColor};
  }
`;
