import { createSlice } from "@reduxjs/toolkit";
import { fetchCartData } from "./cart-action";


const initialState = {
  items: [],
  counter: 0,
  changed: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addNewItem(state, action) {
      const newItem = action.payload;
      const index = state.items.findIndex((item) => item.id === newItem.id);

      if (index === -1) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          description: newItem.description,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        state.items[index].quantity++;
        state.items[index].totalPrice =
          state.items[index].totalPrice + state.items[index].price;
      }
      state.changed = true;
      state.counter++;
    },
    increaseItemCounter(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);

      state.items[index].quantity++;
      state.items[index].totalPrice =
        state.items[index].totalPrice + state.items[index].price;
      state.changed = true;

      state.counter++;
    },
    decreaseItemCounter(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.counter--;
      state.changed = true;


      if (state.items[index].quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        state.items[index].quantity--;
        state.items[index].totalPrice =
        state.items[index].totalPrice - state.items[index].price;
      }
    }
  },
  extraReducers: {
    [fetchCartData.fulfilled]: (state, action) => {
      
      state.items = action.payload.items;
      state.counter = action.payload.counter;
    }
  }

});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
