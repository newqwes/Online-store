import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  height: 100px;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-around;
  width: 100%;
  height: ${({ height }) => height}px;
  background: ${(props) => props.theme.background.color[props.themeVariant]};

  svg {
    margin: 0 20px;
  }
`;
