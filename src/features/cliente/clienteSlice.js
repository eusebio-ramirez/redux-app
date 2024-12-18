import { createSlice } from "@reduxjs/toolkit";

export const clienteSlice = createSlice({
  name: "cliente",
  initialState: { clientes: [] },
  reducers: {
    addCliente: (state, action) => {
      state.clientes = [...state.clientes, action.payload];
    },
  },
});

export const { addCliente } = clienteSlice.actions;

export default clienteSlice.reducer;
