// src/store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.totalCount += 1;
      state.totalPrice += parseFloat(item.price.replace('AU$', ''));
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((i) => i.id === id);

      if (existingItem) {
        state.totalCount -= existingItem.quantity;
        state.totalPrice -=
          existingItem.quantity * parseFloat(existingItem.price.replace('AU$', ''));
        state.items = state.items.filter((i) => i.id !== id);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((i) => i.id === id);

      if (existingItem && quantity > 0) {
        state.totalCount += quantity - existingItem.quantity;
        state.totalPrice +=
          (quantity - existingItem.quantity) *
          parseFloat(existingItem.price.replace('AU$', ''));
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
