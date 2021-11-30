export type goalReward = {
	coins: number;
	jewels: number;
};

export type Goal = {
	index: number; //string format: epoch time as created by new Date().getTime();
	goalIsSteps: boolean;
	title: string;
	note?: string;
	difficulty?: number;
	rewards: goalReward;
	reminder?: Date;
};

export type goalData = {
	title: string;
	data: Goal[];
}[];