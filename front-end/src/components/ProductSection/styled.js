import styled from 'styled-components';

import SECTION_WIDTH from '../../constants/sectionWidth';

export const ProductWrapper = styled.section`
  background: url(${(props) => props.theme.background.imageItem[props.themeVariant]}) right bottom
      no-repeat,
    url(${(props) => props.theme.background.imageBackground[props.themeVariant]});
`;

export const ProductContent = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 90vh;
  max-width: ${SECTION_WIDTH.midle}px;
`;
