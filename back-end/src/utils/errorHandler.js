export default (error) => ({ status: 500, message: error.message ? error.message : error });
