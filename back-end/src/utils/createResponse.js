/**
 * @param {number} status - HTTP status code
 * @param {string} message - response message
 * @param {Object} data - response obj
 * @returns {Object} - Object with status, message and data
 */
export default (status, message, data = {}) => ({ status, message, data });
