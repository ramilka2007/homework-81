import {createSlice} from '@reduxjs/toolkit';
import {Link} from "../../types.ts";
import {makeFromOriginalToShort} from "./homeThunk.ts";

interface HomeState {
    link: Link | null;
    isLoading: boolean;
    isError: boolean;
}

const initialState: HomeState = {
    link: null,
    isLoading: false,
    isError: false,
};

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(makeFromOriginalToShort.pending, (state: HomeState) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(makeFromOriginalToShort.fulfilled, (state: HomeState, {payload: url}) => {
            state.isLoading = false;
            state.link = url;
        });
        builder.addCase(makeFromOriginalToShort.rejected, (state: HomeState) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
    selectors: {
        selectLink: (state) => state.link
    }
});


export const homeReducer = homeSlice.reducer;

export const {selectLink} = homeSlice.selectors;