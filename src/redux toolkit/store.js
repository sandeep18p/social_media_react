import { configureStore } from "@reduxjs/toolkit";
import fetchDataSlice  from "./postsReducer";

const store = configureStore({
    reducer: {
    posts:fetchDataSlice,
}
})

export default store;