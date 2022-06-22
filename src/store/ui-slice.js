import { createSlice } from "@reduxjs/toolkit";
import { sendCartData, fetchCartData } from "./cart-action";

const initialState = {
  isShown: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showCart(state) {
      state.isShown = !state.isShown;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
  extraReducers: {
    [fetchCartData.rejected]: (state) => {
      state.notification ={
        status: "error",
        title: "Error",
        message: "Fetching failed",
      }
    },
    [sendCartData.fulfilled]: (state) => {
      state.notification ={
        status: "success",
        title: "Success",
        message: "Sent cart data successfuly!",
      }
    },
    [sendCartData.pending]: (state) => {
      state.notification ={
        status: "pending",
        title: "...Loading",
        message: "Sending cart data",
      }
    },
    [sendCartData.rejected]: (state) => {
      state.notification ={
        status: "error",
        title: "Error",
        message: "Something went wrong while sending data",
      }
    },
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
