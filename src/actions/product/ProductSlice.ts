import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import Environment from "../../api/Environment";

type Products = {
  id: number;
  name: string;
};

type InitialState = {
  loading: boolean;
  products: Products[];
  error: string;
};

const initialState: InitialState = {
  loading: false,
  products: [],
  error: "",
};

export const fetchProduct = createAsyncThunk("products", async () => {
  const response = await Environment.get("users?page=2");
  return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchProduct.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(
      fetchProduct.fulfilled,
      (state: any, action: PayloadAction<Products[]>) => {
        state.loading = false;
        state.products = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchProduct.rejected, (state: any, action: any) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
