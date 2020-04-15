/**
 * @param {any} initialState
 * @param {Object.<string, Function>} handlers
 */
export default (initialState, handlers) => (state = initialState, action) => (handlers.hasOwnProperty(action.type)
  ? handlers[action.type](state, action)
  : state);
