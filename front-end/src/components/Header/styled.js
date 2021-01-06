import styled, { css } from 'styled-components';
import WrapperStyle from '../../style/WrapperStyle';

export const HeaderWrapper = styled.header`
  background: ${(props) => props.theme.background.color[props.themevariant]};
  height: ${(props) => props.headerHeight}px;
  display: flex;
`;

export const HeaderContent = styled(WrapperStyle)`
  display: flex;
  justify-content: space-between;
  max-width: ${(props) => props.pageWidth}px;

  > * {
    width: 100%;
  }
`;

export const otherstyles = css`
  margin-left: 20px;
`;
