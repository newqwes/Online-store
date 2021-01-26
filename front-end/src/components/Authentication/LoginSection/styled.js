import styled from 'styled-components';

import SECTION_WIDTH from '../../../constants/sectionWidth';

export const LoginSectionWrapper = styled.section`
  background: url(${(props) => props.theme.background.imageBackground[props.themeVariant]});
`;

export const LoginSectionContent = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 85vh;
  max-width: ${SECTION_WIDTH.midle}px;
`;
