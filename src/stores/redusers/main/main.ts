import { mainActions } from './../../actions/mainActions';
import { createSlice } from '@reduxjs/toolkit'
import { IStore } from './types'

const initialState: IStore = {
    template: 'React Williams Template',
    users: [],
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

export const { setUsers } = mainSlice.actions;