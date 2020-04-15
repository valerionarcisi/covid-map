/**
 * @param {String} type the action type
 * @param {any} payload
 * @returns {Object} redux action
 */
export default (type, payload, meta = {}) => ({
  type,
  payload,
  meta,
});
