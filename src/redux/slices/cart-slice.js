import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  totalQuantity: 0,
  cartVisibility: false,
  totalPrice: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.totalPrice -= existingItem.price;
        existingItem.quantity--;
      }
    },
    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
    },
  },
});
export const cartActions = cartSlice.actions;
