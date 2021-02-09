import styled from 'styled-components';

import SECTION_WIDTH from '../../constants/sectionWidth';

export const HeaderWrapper = styled.header`
  display: flex;
  background: ${(props) => props.theme.background.color[props.themeVariant]};
  height: 10vh;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${SECTION_WIDTH.midle}px;
  margin: 0 auto;

  svg {
    margin: 0 20px;
  }
`;
