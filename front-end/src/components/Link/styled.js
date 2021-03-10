import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const sharedStyle = ({
  theme: { label },
  themeVariant,
  textColor = label.color[themeVariant],
}) => css`
  font-size: 22px;
  color: ${textColor};
  font-weight: bold;
  text-decoration: none;
`;

export const CustomNavLink = styled(NavLink)`
  ${sharedStyle}
`;

export const CustomLink = styled.a`
  ${sharedStyle}
`;
