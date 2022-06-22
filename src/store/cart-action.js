import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchCartData = createAsyncThunk('cart/fetchCart', 
  async () => {
    const response = await fetch(
        "https://http-4c1dc-default-rtdb.firebaseio.com/cart.json"
      );

    if (!response.ok) {
        throw new Error("");
    }
    const data = await response.json();
    
    return {
        items: data?.items || [],
        counter: data?.counter || 0,
      };
}
);

export const sendCartData = createAsyncThunk('cart/sendCart', async (cart) => {
  const response = await fetch(
    'https://http-4c1dc-default-rtdb.firebaseio.com/cart.json',
    {
      method: "PUT",
      body: JSON.stringify(cart),
    }
  );

  if (!response.ok) {
    throw new Error("");
  }
})

