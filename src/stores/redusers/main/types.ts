export type User = {
    id: number,
    name: string
}

export interface IStore {
    template: string,
    users: User[]
}