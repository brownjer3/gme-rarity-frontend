import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const COLLECTIONS_URL = "http://localhost:3001/collections";
const COLLECTIONS_URL =
	"https://gmeraritytool.herokuapp.com/OrderBy=none/Top50CollectionsMonth";
// const NFTS_BY_COLLECTION_ID = "http://localhost:3001/collections?collectionId=";
// const TOP_FIVE_URL = "http://localhost:3001/topFive";

const initialState = {
	data: [],
	loading: true,
	activeCollection: {},
	error: "",
};

export const fetchCollections = createAsyncThunk(
	"collections/fetchCollections",
	async () => {
		try {
			const res = await fetch(COLLECTIONS_URL);
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	}
);

const collectionsSlice = createSlice({
	name: "collections",
	initialState: initialState,
	reducers: {
		setActiveCollection(state, action) {
			const collection = state.data.find(
				(collection) => collection.slug === action.payload
			);
			state.activeCollection = collection;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCollections.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(fetchCollections.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
			})
			.addCase(fetchCollections.rejected, (state, action) => {
				console.log(action.error);
				state.loading = false;
			});
	},
});

export const { setActiveCollection } = collectionsSlice.actions;

export default collectionsSlice.reducer;
