import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const sharedStyle = css`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.theme.label.primary};
  font-weight: bold;
  text-decoration: none;
`;

export const NavLinkStyle = styled(NavLink)`
  ${sharedStyle}
`;

export const LinkStyle = styled.a`
  ${sharedStyle}
`;
