import styled, { css } from 'styled-components';

export const ProfileMenuWrapper = styled.aside(
  ({
    theme: { profile },
    themeVariant,
    active,
    backgroundColor = profile.aside.background[themeVariant],
    activeColor = profile.aside.color.active[themeVariant],
    hoverColor = profile.aside.color.hover[themeVariant],
  }) => css`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    min-height: 300px;
    width: ${active ? '180px' : '0'};
    text-align: center;
    transition: 0.3s ease;
    background-color: ${backgroundColor};

    ul {
      display: block;
      padding-top: 70px;

      a {
        font-weight: normal;
        line-height: 40px;
        cursor: pointer;
        margin-top: 20px;
        font-size: ${active ? '18px' : '0'};
        transition: 0.2s ease;

        &:hover {
          color: ${hoverColor};
        }
      }

      .active,
      .active:hover {
        color: ${activeColor};
      }
    }
  `,
);

export const HamburgerWrapper = styled.div(
  ({
    theme: { profile },
    themeVariant,
    activeColor = profile.aside.hamburger.active[themeVariant],
    hoverColor = profile.aside.hamburger.hover[themeVariant],
  }) => css`
    position: absolute;
    right: 0px;
    top: 40px;
    cursor: pointer;
    transition: 0.3s ease;

    fill: ${activeColor};

    &:hover {
      fill: ${hoverColor};
    }
  `,
);
