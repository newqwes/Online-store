import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import ROUTER_PATH from '../../constants/routerPath';

import OrderMessageWrapper from './styled';

class OrderMessageSection extends React.Component {
  componentWillUnmount() {
    this.props.deleteOrder();
  }

  render() {
    if (this.props.isSuccess) {
      return (
        <OrderMessageWrapper>
          Ваш заказ подтвержден. Копия заказа отправленна Вам на почту. Ожидайте звонка.
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
