import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk("cart/addToCart", async (product) => {
  const response = await axios.post("http://localhost:3000/cart", product);
  return response.data;
});
export const cartCalling = createAsyncThunk("cart/getCart", async () => {
  const response = await axios.get("http://localhost:3000/cart");
  return response.data;
});
export const deleteFromCart = createAsyncThunk(
  "cart/deleteFromCart",
  async (id) => {
    await axios.delete(`http://localhost:3000/cart/${Number(id)}`);
    return id;
  }
);
export const clearCart = createAsyncThunk("cart/clearCart", async () => {
  const res = await axios.get("http://localhost:3000/cart");
  const items = res.data;

  await Promise.all(
    items.map((item) => axios.delete(`http://localhost:3000/cart/${item.id}`))
  );

  return [];
});

export const cartSlice = createSlice({
  initialState: [],
  name: "cart",
  reducers: {
    // addToCart: (state, action) => {
    //   state.push(action.payload);
    // },
    // clearCart: (state, action) => {
    //   return [];
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(cartCalling.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(cartCalling.pending, (state, action) => {
        return state;
      })
      .addCase(cartCalling.rejected, (state, action) => {
        return state;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        return state.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteFromCart.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(deleteFromCart.rejected, (state, action) => {
        console.log("error");
      })
      .addCase(clearCart.fulfilled, (state, action) => {
        return [];
      });
  },
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
