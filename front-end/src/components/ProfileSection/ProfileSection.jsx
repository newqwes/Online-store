import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import DIRECTION from '../../constants/direction';
import ROUTER_PATH from '../../constants/routerPath';
import { ALIGN_ITEMS } from '../../constants/position';
import THEME_VARIANT from '../../constants/themeVariant';

import Flex from '../Flex';
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
    const { themeVariant, userAuthorized } = this.props;
    const { menuActive } = this.state;

    if (!userAuthorized) return <Redirect to={ROUTER_PATH.products.pizza} />;

    return (
      <ProfileWrapper themeVariant={themeVariant}>
        <ProfileContent>
          <ProfileMenu active={menuActive} clickButtonMenu={this.clickButtonMenu} />
          <Flex
            direction={DIRECTION.column}
            alignItems={ALIGN_ITEMS.flexStart}
            className='profile-form-content'>
            <Route path={ROUTER_PATH.profileMenu.user} component={ProfileUserContainer} />
            {/* TODO ProfileAddressContainer and ProfileHistoryContainer in next PR
            <Route path={ROUTER_PATH.profileMenu.address} component={ProfileAddressContainer} />
            <Route path={ROUTER_PATH.profileMenu.history} component={ProfileHistoryContainer} />
             */}
          </Flex>
        </ProfileContent>
      </ProfileWrapper>
    );
  }
}

export default ProfileSection;
