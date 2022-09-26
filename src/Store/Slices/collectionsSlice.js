import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const COLLECTIONS_URL = "http://localhost:3001/collections";
const COLLECTIONS_URL =
	"https://gmeraritytool.herokuapp.com/OrderBy=none/Top50CollectionsMonth";

const TOP_FIVE_URL =
	"https://gmeraritytool.herokuapp.com/OrderBy=none/Top5Collections";
// const NFTS_BY_COLLECTION_ID = "http://localhost:3001/collections?collectionId=";

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

			const top5Res = await fetch(TOP_FIVE_URL);
			const top5Data = await top5Res.json();

			const extras = [];
			for (let i = 0; i < top5Data.length; i++) {
				const newColId = top5Data[i].id;
				if (!data.find((col) => col.id === newColId)) {
					extras.push(top5Data[i]);
				}
			}
			return [...data, ...extras];
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
