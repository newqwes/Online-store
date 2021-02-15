import React from 'react';
import PropTypes from 'prop-types';

import itemsType from './propTypes';

import THEME_VARIANT from '../../constants/themeVariant';

import NavbarItem from './NavbarItem';

import { NavbarItems, NavbarWrapper } from './styled';

class Navbar extends React.Component {
  state = { top: 0 };

  handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 50) {
      this.setState({ top: 50 });
    } else {
      this.setState({ top: 100 - offset });
    }
  };

  componentDidMount() {
    this.handleScroll();
  }

  componentDidUpdate() {
    window.addEventListener('scroll', this.handleScroll);
  }

  items = this.props.menuItems.map(({ id, link, title }) => (
    <NavbarItem key={id} link={link} title={title} />
  ));

  static propTypes = {
    menuItems: itemsType.isRequired,
    horizontally: PropTypes.bool,
    themeVariant: PropTypes.string,
  };

  static defaultProps = {
    horizontally: true,
    themeVariant: THEME_VARIANT.default,
  };

  render() {
    const { horizontally, themeVariant } = this.props;
    const { top } = this.state;

    return (
      <NavbarWrapper themeVariant={themeVariant}>
        <NavbarItems themeVariant={themeVariant} horizontally={horizontally} top={top}>
          {this.items}
        </NavbarItems>
      </NavbarWrapper>
    );
  }
}

export default Navbar;
