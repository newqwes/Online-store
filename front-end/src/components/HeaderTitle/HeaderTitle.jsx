import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styled';

const HeaderTitle = ({ icon: Icon, title, iconSize, textColor }) => (
  <Wrapper iconSize={iconSize} textColor={textColor}>
    <Icon iconSize={iconSize} />
    <h3>{title}</h3>
  </Wrapper>
);

HeaderTitle.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string,
  iconSize: PropTypes.number,
  textColor: PropTypes.string,
};

HeaderTitle.defaultProps = {
  iconSize: 48,
  textColor: '#fff'
};

export default HeaderTitle;
