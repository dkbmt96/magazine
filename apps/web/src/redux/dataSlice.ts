import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../utils"; // Adjust the import based on your client setup
import { CREATE_COMMENT, GET_CATEGORIES, GET_NEWS, GET_NEWS_BY_CATEGORIES, GET_NEWS_BY_ID, GET_RECENT_NEWS } from "../graphql/queries";

// Async thunk to fetch data
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const categoriesResponse = await client.query({ query: GET_CATEGORIES });
  const newsResponse = await client.query({ query: GET_NEWS });

  return {
    categories: categoriesResponse.data.categories,
    news: newsResponse.data.news,
  };
});

export const fetchCategories = createAsyncThunk("data/fetchCategories", async () => {
  const categoriesResponse = await client.query({ query: GET_CATEGORIES });
  return {
    categories: categoriesResponse.data.categories
  };
});

// Async thunk to fetch data
export const fetchNewsByCatId = createAsyncThunk("data/fetchNewsByCatId", async (props) => {
  const { catId, count } = props;
  const newsResponse = await client.query({ query: GET_NEWS_BY_CATEGORIES, variables: { catId: catId, count: count } });
  return {
    category: newsResponse.data.newsByCategory?.[0]?.category?.name || 'Technology',
    news: newsResponse.data.newsByCategory,
  };
});

// Async thunk to fetch data
export const fetchNewsById = createAsyncThunk("data/fetchNewsById", async (props) => {
  const { id } = props;
  const res = await client.query({ query: GET_NEWS_BY_ID, variables: { id: id } });
  return {
    currentNews: res.data.newsById,
  };
});

// Async thunk to fetch data
export const recentlyNews = createAsyncThunk("data/recentlyNews", async () => {
  const newsResponse = await client.query({ query: GET_RECENT_NEWS });
  return {
    news: newsResponse.data.newsTrending,
  };
});

export const createComment = createAsyncThunk("data/createComment", async (props) => {
  const { newsId, name, content } = props;
  const newsResponse = await client.mutate({ mutation: CREATE_COMMENT, variables: { newsId, name, content } });
  return {
    news: newsResponse.data.newsTrending,
  };
});

// Create a slice
const dataSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    categories: [],
    category: null,
    news: [],
    newsDetails: null,
    error: null,
    recentNews: [],
    currentNews: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all
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
      })
      // Fetch categories
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.categories;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch news by cat
      .addCase(fetchNewsByCatId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsByCatId.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload.news;
        state.category = action.payload.category;
      })
      .addCase(fetchNewsByCatId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Recently News
      .addCase(recentlyNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(recentlyNews.fulfilled, (state, action) => {
        state.loading = false;
        state.recentNews = action.payload.news;
      })
      .addCase(recentlyNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Single News
      .addCase(fetchNewsById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentNews = action.payload.currentNews;
      })
      .addCase(fetchNewsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
