import { MainActions } from "./mainTypes"

export const mainActions: MainActions = {
    setUsers: (state, { payload }) => {
        state.users = payload
    },
}