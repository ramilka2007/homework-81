import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.tsx";
import {LinkForm} from "../../types.ts";

export const makeFromOriginalToShort = createAsyncThunk(
    'home/post',
    async (link: LinkForm) => {
        const {data: url} = await axiosApi.post(`links`, link);
        return url ?? null;
    });