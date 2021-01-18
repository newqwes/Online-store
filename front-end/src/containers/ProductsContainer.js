import { connect } from 'react-redux';

import { getProductsList, addToCart } from '../actionCreators';

import ProductSection from '../components/ProductSection';

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {
  getProductsList,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSection);
