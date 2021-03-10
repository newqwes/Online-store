import styled, { css } from 'styled-components';

import SECTION_WIDTH from '../../constants/sectionWidth';

export const ProductWrapper = styled.section(
  ({
    theme: { background },
    themeVariant,
    backgroundImage = background.imageBackground[themeVariant],
    backgroundImageItem = background.imageItem[themeVariant],
  }) => css`
    background: url(${backgroundImageItem}) right bottom no-repeat, url(${backgroundImage});
  `,
);
export const ProductContent = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 80vh;
  max-width: ${SECTION_WIDTH.midle}px;
`;
