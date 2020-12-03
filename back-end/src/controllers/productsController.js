import ProductsService from '../services/productsService';

const productsService = new ProductsService('product');

export const getAllProducts = async (req, res) => {
  const products = await productsService.getAll();
  if (products) {
    res.status(200).json({
      status: 'success',
      length: products.length,
      date: {
        products,
      },
    });
  } else {
    res.status(400).json({
      status: 'error',
    });
  }
};

export const getByIDProduct = async (req, res) => {
  const product = await productsService.getByID(req.params.id);
  if (product && product.length !== 0) {
    res.status(200).json({
      status: 'success',
      date: {
        product,
      },
    });
  } else {
    res.status(400).json({
      status: 'error',
    });
  }
};

export const createProduct = async (req, res) => {
  const product = await productsService.create(req.body);
  if (product) {
    res.status(201).json({
      status: 'success',
    });
  } else {
    res.status(400).json({
      status: 'error',
    });
  }
};
