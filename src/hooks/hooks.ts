import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../stores/index'
import { setUsers } from '../stores/redusers/main/main'
import { User } from '../stores/redusers/main/types'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = () => {
    const dispatch = useAppDispatch()

    return {
        setUsers: (users: User[]) => {
            dispatch(setUsers(users))
        }
    }
}