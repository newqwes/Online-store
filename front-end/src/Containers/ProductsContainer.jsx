import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProductsList } from '../actionCreators';
import { productsType } from '../propType/index';
import ProductSection from '../components/ProductSection';

class ProductsContainer extends React.Component {
  state = {
    type: '',
  };

  searchUrl = () => {
    const { search } = this.props.location;
    const type = new URLSearchParams(search).get('type');
    this.setState({ type });
    this.props.getProductsList(type);
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
  getProductsList: PropTypes.func.isRequired,
  products: productsType.isRequired,
  location: PropTypes.any,
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {
  getProductsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
