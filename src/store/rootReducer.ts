import { combineReducers } from '@reduxjs/toolkit';

import productsReducer from './productSlice';
import modalReducer from './modalSlice';

const rootReducer = combineReducers({
    products: productsReducer,
    modal: modalReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
