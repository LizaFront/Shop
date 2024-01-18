import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';

import { IProduct } from 'models/product.data';
import { Services } from 'services/services';

const createSliceWithThunks = buildCreateSlice({
    creators: {
        asyncThunk: asyncThunkCreator,
    },
});

interface IinitialState {
    loading: boolean;
    products: IProduct[];
    error: boolean;
}

const initialState: IinitialState = {
    loading: false,
    products: [],
    error: false,
};

export const productSlice = createSliceWithThunks({
    name: 'products',
    initialState,
    reducers: create => ({
        getInitialProducts: create.asyncThunk(
            async (id: string, _thunkAPI) => {
                const res = await Services.getAllProducts();
                return res.data;
            },
            {
                pending: state => {
                    state.loading = true;
                },
                rejected: (state, action) => {
                    state.error = true;
                },
                fulfilled: (state, action) => {
                    state.products = action.payload;
                },
                settled: state => {
                    state.loading = false;
                },
            }
        ),
    }),
    selectors: {
        productsSelector: state => state.products,
        loadingSelector: state => state.loading,
        errorSelector: state => state.error,
    },
});

export const { getInitialProducts } = productSlice.actions;
export const { productsSelector, loadingSelector, errorSelector } = productSlice.selectors;

export default productSlice.reducer;
