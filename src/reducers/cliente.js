import { createSlice } from '@reduxjs/toolkit'

export const clienteReducer = createSlice({
  name: 'cliente',
  initialState: {
    form:{},
  },
  reducers: {
    ADD_CLIENTE: (state, action) => {
      state.form = action.payload
    },
  },
})

export const { ADD_CLIENTE } = clienteReducer.actions
export const addCliente = (form) => (dispatch) => {
    dispatch(ADD_CLIENTE(form))
}

export default clienteReducer.reducer
