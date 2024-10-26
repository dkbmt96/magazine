import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {client} from "../utils"; // Adjust the import based on your client setup
import { GET_CATEGORIES, GET_NEWS } from "../graphql/queries";

// Async thunk to fetch data
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const categoriesResponse = await client.query({ query: GET_CATEGORIES });
  const newsResponse = await client.query({ query: GET_NEWS });

  return {
    categories: categoriesResponse.data.categories,
    news: newsResponse.data.news,
  };
});

// Async thunk to fetch data
export const fetchNewsById = createAsyncThunk("data/fetchNewsById", async () => {
  const categoriesResponse = await client.query({ query: GET_CATEGORIES });
  const newsResponse = await client.query({ query: GET_NEWS });

  return {
    categories: categoriesResponse.data.categories,
    news: newsResponse.data.news,
  };
});

// Create a slice
const dataSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    categories: [],
    news: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.categories;
        state.news = action.payload.news;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
