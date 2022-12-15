import { PayloadAction } from "@reduxjs/toolkit"
import { IStore, User } from "../redusers/main/types"

export type MainActions = {
    setUsers: (state: IStore, payload: PayloadAction<User[]>) => void
}