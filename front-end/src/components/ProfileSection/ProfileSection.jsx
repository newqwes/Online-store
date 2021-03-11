import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import ROUTER_PATH from '../../constants/routerPath';
import THEME_VARIANT from '../../constants/themeVariant';

import ProfileMenu from './ProfileMenu';

import ProfileUserContainer from '../../containers/ProfileUserContainer';

import { ProfileWrapper, ProfileContent } from './styled';

class ProfileSection extends React.Component {
  static propTypes = {
    themeVariant: PropTypes.string,
    userAuthorized: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    themeVariant: THEME_VARIANT.default,
  };

  state = {
    menuActive: true,
  };

  clickButtonMenu = () => this.setState({ menuActive: !this.state.menuActive });

  render() {
    const { userAuthorized } = this.props;
    const { menuActive } = this.state;

    if (userAuthorized) {
      return (
        <ProfileWrapper>
          <ProfileMenu active={menuActive} clickButtonMenu={this.clickButtonMenu} />
          <ProfileContent>
            <Route path={ROUTER_PATH.profileMenu.user} component={ProfileUserContainer} />
            {/* TODO ProfileAddressContainer and ProfileHistoryContainer in next PR
            <Route path={ROUTER_PATH.profileMenu.address} component={ProfileAddressContainer} />
            <Route path={ROUTER_PATH.profileMenu.history} component={ProfileHistoryContainer} />
             */}
          </ProfileContent>
        </ProfileWrapper>
      );
    }

    return <Redirect to={ROUTER_PATH.products.pizza} />;
  }
}

export default ProfileSection;
