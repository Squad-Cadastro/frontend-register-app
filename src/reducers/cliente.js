import { createSlice } from '@reduxjs/toolkit'
// import api from '../service/api'

export const clienteReducer = createSlice({
  name: 'cliente',
  initialState: {
    form:[],
  },
  reducers: {
    ADD_CLIENTE: (state, action) => {
      state.form = [...state.form, action.payload]
    },
  },
})

export const { ADD_CLIENTE } = clienteReducer.actions
export const addCliente = (form) => async (dispatch) => {
  let response = await api.post('/clientes', form)
  if(response.status === '201'){
    dispatch(ADD_CLIENTE(form))
  }
}

export default clienteReducer.reducer
