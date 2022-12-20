import { MainActions } from "./mainTypes"

export const mainActions: MainActions = {
    setChecks: (state, { payload }) => {
        state.checks = payload
    },
    setProducts: (state, { payload }) => {
        state.products = payload
    },
    setSearchProduct: (state, { payload }) => {
        state.selectProduct = payload
    },
}