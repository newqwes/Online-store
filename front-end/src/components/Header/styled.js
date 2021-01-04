import styled from 'styled-components';
import PropTypes from 'prop-types';
import WrapperStyle from '../../style/WrapperStyle';
import PAGE_WIDTH from '../../constants/pageWidth';
import HEADER_HEIGHT from '../../constants/header';
import BG_COLOR from '../../constants/background';

export const HeaderStyle = styled.header`
  background: ${(props) => props.theme.background[props.bgColor]};
  height: ${(props) => props.headerHeight}px;
  display: flex;
`;

export const HeaderWrapper = styled(WrapperStyle)`
  display: flex;
  justify-content: space-between;
  max-width: ${(props) => props.pageWidth}px;

  > * {
    width: 100%;
  }
`;

HeaderWrapper.propTypes = {
  pageWidth: PropTypes.number,
};

HeaderStyle.propTypes = {
  headerHeight: PropTypes.number,
  bgColor: PropTypes.string,
};

HeaderWrapper.defaultProps = {
  pageWidth: PAGE_WIDTH.midle,
};

HeaderStyle.defaultProps = {
  headerHeight: HEADER_HEIGHT.default,
  bgColor: BG_COLOR.default,
};
