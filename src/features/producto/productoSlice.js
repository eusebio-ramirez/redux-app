import { createSlice } from "@reduxjs/toolkit";

export const productoSlice = createSlice({
  name: "producto",
  initialState: { productos: [] },
  reducers: {
    addProducto: (state, action) => {
      state.productos = [...state.productos, action.payload];
    },
  },
});

export const { addProducto } = productoSlice.actions;

export default productoSlice.reducer;
