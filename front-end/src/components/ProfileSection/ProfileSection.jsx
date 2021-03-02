import React from 'react';
import PropTypes from 'prop-types';

import DIRECTION from '../../constants/direction';
import { ALIGN_ITEMS } from '../../constants/position';
import THEME_VARIANT from '../../constants/themeVariant';

import ProfileUserContainer from '../../containers/ProfileUserContainer';

import Flex from '../Flex';
import ProfileMenu from './ProfileMenu';

import { ProfileWrapper, ProfileContent } from './styled';

class ProfileSection extends React.Component {
  initialState = {
    profile: false,
    address: false,
    history: false,
    menuActive: true,
  };

  state = { ...this.initialState, profile: true };

  toProfile = () => this.setState({ ...this.initialState, profile: true });

  toAddress = () => this.setState({ ...this.initialState, address: true });

  toHistory = () => this.setState({ ...this.initialState, history: true });

  clickButtonMenu = () => this.setState({ menuActive: !this.state.menuActive });

  static propTypes = {
    themeVariant: PropTypes.string,
  };

  static defaultProps = {
    themeVariant: THEME_VARIANT.default,
  };

  render() {
    const { themeVariant } = this.props;
    const { menuActive, profile, address, history } = this.state;

    return (
      <ProfileWrapper themeVariant={themeVariant}>
        <ProfileContent>
          <ProfileMenu
            active={menuActive}
            profile={profile}
            address={address}
            history={history}
            toProfile={this.toProfile}
            toAddress={this.toAddress}
            toHistory={this.toHistory}
            clickButtonMenu={this.clickButtonMenu}
          />
          <Flex
            direction={DIRECTION.column}
            alignItems={ALIGN_ITEMS.flexStart}
            className='profile__form-content'>
            {profile && <ProfileUserContainer />}

            {/* TODO ProfileAddressContainer and ProfileHistoryContainer in next PR */}
            {address && '<ProfileAddressContainer />'}
            {history && '<ProfileHistoryContainer />'}
          </Flex>
        </ProfileContent>
      </ProfileWrapper>
    );
  }
}

export default ProfileSection;
