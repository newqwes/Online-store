import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const sharedStyle = css`
  margin-left: 20px;
  font-size: 22px;
  color: ${(props) => props.theme.label.color[props.variant]};
  font-weight: bold;
  text-decoration: none;
`;

export const CustomNavLink = styled(NavLink)`
  ${sharedStyle}
`;

export const CustomLink = styled.a`
  ${sharedStyle}
`;
