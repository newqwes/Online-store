/**
 * @param {number} status HTTP status code
 * @param {string} message response message
 * @param {object} data response obj
 * @returns {object} { status, message, data }
 */
export default (status, message, data = {}) => ({ status, message, data });
