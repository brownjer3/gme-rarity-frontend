import { configureStore } from "@reduxjs/toolkit";
import collectionsReducer from "./Slices/collectionsSlice";

const store = configureStore({
    reducer: {
        collections: collectionsReducer,
    }
});

export default store;