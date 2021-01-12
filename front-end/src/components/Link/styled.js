import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const sharedStyle = css`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.theme.label.color[props.variant]};
  font-weight: bold;
  text-decoration: none;
  margin-left: 20px;
`;

export const CustomNavLink = styled(NavLink)`
  ${sharedStyle}
`;

export const CustomLink = styled.a`
  ${sharedStyle}
`;
