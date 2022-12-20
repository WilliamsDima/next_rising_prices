import { IProduct } from './../stores/redusers/main/types';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../stores/index'
import { setChecks, setProducts, setSearchProduct } from '../stores/redusers/main/main'
import { ICheck } from '../stores/redusers/main/types'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = () => {
    const dispatch = useAppDispatch()

    return {
        setChecks: (checks: ICheck[]) => {
            dispatch(setChecks(checks))
        },
        setProducts: (products: IProduct[]) => {
            dispatch(setProducts(products))
        },
        setSearchProduct: (product: IProduct) => {
            dispatch(setSearchProduct(product))
        },
    }
}