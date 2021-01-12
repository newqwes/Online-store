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
  max-width: ${(props) => props.pageWidth}px;
  margin: 0 auto;
`;
