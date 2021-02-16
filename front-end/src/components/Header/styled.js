import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  height: 100px;
  position: sticky;
  top: -20px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: ${(props) => props.theme.background.color[props.themeVariant]};

  svg {
    margin: 0 20px;
  }
`;
