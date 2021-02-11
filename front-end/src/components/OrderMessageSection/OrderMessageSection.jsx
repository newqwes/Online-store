import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Flex from '../Flex';
import Label from '../Label';

import ROUTER_PATH from '../../constants/routerPath';

import OrderMessageWrapper from './styled';

class OrderMessageSection extends React.Component {
  componentWillUnmount() {
    this.props.deleteOrder();
  }

  render() {
    const { isSuccess } = this.props;

    if (isSuccess) {
      return (
        <OrderMessageWrapper>
          <Flex>
            <Label text='Ваш заказ подтвержден. Копия заказа отправленна Вам на почту. Ожидайте звонка.' />
          </Flex>
        </OrderMessageWrapper>
      );
    }

    return <Redirect to={ROUTER_PATH.products.pizza} />;
  }
}

OrderMessageSection.propTypes = {
  isSuccess: PropTypes.bool.isRequired,
  deleteOrder: PropTypes.func.isRequired,
};

export default OrderMessageSection;
