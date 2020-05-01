import { combineReducers } from 'redux';
import proviceReducer from './../features/provinces/SliceProvince'

const rootReducer = combineReducers({
  provinces: proviceReducer
})

export default rootReducer
