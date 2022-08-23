import { createSlice } from "@reduxjs/toolkit";

createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantitiy: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});
