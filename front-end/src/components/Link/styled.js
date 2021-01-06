import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const sharedStyle = css`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.theme.label.color[props.themevariant]};
  font-weight: bold;
  text-decoration: none;

  ${(props) => props.otherstyles}
`;

export const CustomNavLink = styled(NavLink)`
  ${sharedStyle}
`;

export const CustomLink = styled.a`
  ${sharedStyle}
`;
