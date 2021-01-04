import styled from 'styled-components';
import PropTypes from 'prop-types';
import WrapperStyle from '../../style/WrapperStyle';
import PAGE_WIDTH from '../../constants/pageWidth';

export const HomeStyle = styled.main``;

export const HomeWrapper = styled(WrapperStyle)`
  max-width: ${(props) => props.pageWidth}px;
`;

HomeWrapper.propTypes = {
  pageWidth: PropTypes.number,
};

HomeWrapper.defaultProps = {
  pageWidth: PAGE_WIDTH.midle,
};
