import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const sharedStyle = css`
  ${(props) => props.myStyle}

  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.theme.label.color[props.themeVariant]};
  font-weight: bold;
  text-decoration: none;
`;

export const CustomNavLink = styled(NavLink)`
  ${sharedStyle}
`;

export const CustomLink = styled.a`
  ${sharedStyle}
`;
