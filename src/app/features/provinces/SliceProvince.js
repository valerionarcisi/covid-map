import { createSlice } from '@reduxjs/toolkit'
import getProvince from '../../api/getProvince'

const initialState = {
  data: [],
  loading: false,
  error: null
}

const provinceSlice = createSlice({
  name: 'province',
  initialState,
  reducers: {
    getProvincesStart(state) {
      state.loading = true
      state.error = null
    },
    getProvincesSuccess(state, action) {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getProvincesFailure(state, action) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {
  getProvincesStart,
  getProvincesSuccess,
  getProvincesFailure
} = provinceSlice.actions

export default provinceSlice.reducer

export const fetchProvinces = () => async dispatch => {

  try {
    dispatch(getProvincesStart())
    const result = await getProvince()
    dispatch(getProvincesSuccess(result))
  } catch (err) {
    dispatch(getProvincesFailure(err))
  }
}

