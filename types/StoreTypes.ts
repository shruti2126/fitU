export type StoreItem = {
    id: number,
    name: string,
    description: string,
    coins: number,
    jewels: number,
    isBought: boolean,
    effect: any
}

export type Store = StoreItem[]