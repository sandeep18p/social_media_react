import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('posts/fetchData', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let res = await response.json();

    if (!res.length) {
      throw new Error("Something went wrong! Try again.");
    }

    res = res.map((item) => {
      return {
        ...item,
        img: `https://picsum.photos/200?random=${item.id}`
      };
    });

    return res;
  } catch (error) {
    throw new Error(error.message);
  }
});

const fetchDataSlice = createSlice({
  name: 'posts',
  initialState: {
    loading: false,
    data: [],
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default fetchDataSlice.reducer;
