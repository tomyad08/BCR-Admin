import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "./const/endpoint";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };

    const response = await axios.get(API.GET_CARS, config);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };
    const response = await axios.delete(API.DELETE_CARS + `/${id}`, config);
    return response;
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (inputs) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };

    const formData = new FormData();
    formData.append("image", inputs.image);
    formData.append("name", inputs.name);
    formData.append("category", inputs.category);
    formData.append("price", inputs.price);
    formData.append("status", false);

    const response = await axios.put(
      `https://bootcamp-rent-cars.herokuapp.com/admin/car/${inputs.id}`,
      formData,
      config
    );
    return response.data;
  }
);

export const addProduct = createAsyncThunk(
  "product/updateProduct",
  async (inputs) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };
    console.log(inputs);
    const formData = new FormData();
    formData.append("image", inputs.image);
    formData.append("name", inputs.name);
    formData.append("category", inputs.category);
    formData.append("price", inputs.price);
    formData.append("status", false);

    console.log("ini1");
    console.log(formData);
    console.log("nah1");

    const response = await axios.post(
      `https://bootcamp-rent-cars.herokuapp.com/admin/car`,
      formData,
      config
    );

    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: {
    [fetchProduct.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    },
    [addProduct.fulfilled]: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
