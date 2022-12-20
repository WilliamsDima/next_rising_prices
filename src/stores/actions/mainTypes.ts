import { IProduct } from './../redusers/main/types';
import { PayloadAction } from "@reduxjs/toolkit"
import { ICheck, IStore } from "../redusers/main/types"

export type MainActions = {
    setChecks: (state: IStore, payload: PayloadAction<ICheck[]>) => void
    setProducts: (state: IStore, payload: PayloadAction<IProduct[]>) => void
    setSearchProduct: (state: IStore, payload: PayloadAction<IProduct>) => void
}