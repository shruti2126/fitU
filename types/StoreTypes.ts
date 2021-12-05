export type ItemEffect = {
    type: string,
    effect: any
}

export type StoreItem = {
    id: number | string,
    name: string,
    description: string,
    coins: number,
    jewels: number,
    isBought: boolean,
    isActive: boolean,
    effect: ItemEffect
}

export type Store = StoreItem[]