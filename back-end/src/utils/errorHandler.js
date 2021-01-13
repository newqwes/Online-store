export default (status, error) => ({ status, message: error.message ? error.message : error });
