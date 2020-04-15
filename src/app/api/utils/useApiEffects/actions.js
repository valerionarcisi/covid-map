import { FETCHING, SUCCESS, ERROR } from './types';

export const fetching = () => ({ type: FETCHING });
export const success = (response) => ({ type: SUCCESS, response });
export const error = (response, exception) => ({
  type: ERROR,
  response,
  exception,
});
