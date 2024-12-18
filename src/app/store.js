import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "../features/counter/counterSlice";
import clienteSlice from "../features/cliente/clienteSlice";
import productoSlice from "../features/producto/productoSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    cliente: clienteSlice,
    producto: productoSlice,
  },
});
