export type StoreItem = {
    id: number | string,
    name: string,
    description: string,
    coins: number,
    jewels: number,
    isBought: boolean,
    isActive: boolean,
    effect: any
}

export type Store = StoreItem[]