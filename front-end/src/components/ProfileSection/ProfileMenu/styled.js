import styled from 'styled-components';

export const ProfileMenuWrapper = styled.aside.attrs(({ theme, themeVariant }) => ({
  asideBorder: theme.profile.aside.border[themeVariant],
  activeColor: theme.profile.aside.color.active[themeVariant],
  hoverColor: theme.profile.aside.color.hover[themeVariant],
}))`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ active }) => (active ? '200px' : '0')};
  text-align: center;
  transition: 0.3s ease;
  border-right: 1px solid ${({ asideBorder }) => asideBorder};

  ul {
    display: block;
    padding-top: 40px;

    li {
      cursor: pointer;
      margin-top: 20px;
      font-size: ${({ active }) => (active ? '17px' : '0')};
      transition: 0.2s ease;

      &:hover {
        color: ${({ hoverColor }) => hoverColor};
      }
    }

    .active {
      color: ${({ activeColor }) => activeColor};

      &:hover {
        color: ${({ activeColor }) => activeColor};
      }
    }
  }
`;

export const HamburgerWrapper = styled.div.attrs(({ theme, themeVariant }) => ({
  active: theme.profile.aside.hamburger.active[themeVariant],
  hover: theme.profile.aside.hamburger.hover[themeVariant],
}))`
  position: absolute;
  right: -60px;
  top: 15px;
  cursor: pointer;
  transition: 0.3s ease;

  fill: ${({ active }) => active};

  &:hover {
    fill: ${({ hover }) => hover};
  }
`;
