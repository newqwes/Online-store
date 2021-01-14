import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProductsListPending } from '../actionCreators';
import { productsType } from '../propType/index';
import ProductSection from '../components/ProductSection';

class ProductsContainer extends React.Component {
  state = {
    products: [],
    type: '',
  };

  add = (products) => {
    this.setState({
      products,
    });
  };

  searchUrl = () => {
    const { search } = this.props.location;
    const type = new URLSearchParams(search).get('type');
    this.setState({ type });
    this.props.getProductsListPending(type);
  };

  componentDidMount() {
    this.searchUrl();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.searchUrl();
    }
  }

  render() {
    return <ProductSection products={this.props.products} type={this.state.type} />;
  }
}

ProductsContainer.propTypes = {
  getProductsListPending: PropTypes.func.isRequired,
  products: productsType.isRequired,
  location: PropTypes.any,
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {
  getProductsListPending,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
