import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProductsListPending } from '../actionCreators';
import { productsType } from '../propType/index';
import ProductSection from '../components/ProductSection';

class ProductsContainer extends React.Component {
  componentDidMount() {
    this.props.getProductsListPending();
  }

  render() {
    return <ProductSection products={this.props.products} />;
  }
}

ProductsContainer.propTypes = {
  getProductsListPending: PropTypes.func.isRequired,
  products: productsType.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products.products,
});

const mapDispatchToProps = {
  getProductsListPending,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
