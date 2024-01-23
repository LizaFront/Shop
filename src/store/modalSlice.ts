import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IinitialState {
    visible: boolean;
    confirm: boolean;
}

const initialState: IinitialState = {
    visible: false,
    confirm: false,
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: create => ({
        changeVisible: create.reducer((state, action: PayloadAction<boolean>) => {
            state.visible = action.payload;
        }),
        changeVisibleConfirm: create.reducer((state, action: PayloadAction<boolean>) => {
            state.confirm = action.payload;
        }),
    }),
    selectors: {
        visibleSelector: state => state.visible,
        visibleConfirm: state => state.confirm,
    },
});

export const { changeVisible, changeVisibleConfirm } = modalSlice.actions;
export const { visibleSelector, visibleConfirm } = modalSlice.selectors;

export default modalSlice.reducer;
