import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: ${(props) => props.theme.background.color[props.themeVariant]};
  height: 100px;
  display: flex;
`;

export const HeaderContent = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  justify-content: space-between;
  max-width: ${(props) => props.pageWidth}px;
`;
