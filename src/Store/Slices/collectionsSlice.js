import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const COLLECTIONS_URL = "http://localhost:3001/collections";
// const TOP_FIVE_URL = "http://localhost:3001/topFive";

const initialState = {
    data: [],
    loading: false,
    error: ''
}

export const fetchCollections = createAsyncThunk('collections/fetchCollections', async () => {
    const res = await fetch(COLLECTIONS_URL)
    const data = await res.json()
    return data
})

const collectionsSlice = createSlice({
    name: "collections",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCollections.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchCollections.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
            })
            .addCase(fetchCollections.rejected, (state, action) => {
                state.loading = false
            })
    }
})

export default collectionsSlice.reducer;

