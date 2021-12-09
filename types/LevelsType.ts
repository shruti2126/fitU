export type levelRewards =  {
    coins: number,
    jewels: number
}

export type level = {
    currentLevel: number
    experienceToComplete: number,
    levelRewards: levelRewards
}