import { mainActions } from './../../actions/mainActions';
import { createSlice } from '@reduxjs/toolkit'
import { IStore } from './types'

const initialState: IStore = {
    checks: null,
    products: null,
    selectProduct: null
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        ...mainActions
    },
})

export const mainReducer = (state = initialState, action: any) => {
    return mainSlice.reducer(state, action);
};

export const { setChecks, setProducts, setSearchProduct } = mainSlice.actions