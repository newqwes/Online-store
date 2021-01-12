import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  background: ${(props) => props.theme.background.color[props.themeVariant]};
  height: 100px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${(props) => props.maxHeaderWidth}px;
  margin: 0 auto;
`;
