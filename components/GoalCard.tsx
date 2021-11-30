import React from 'react';
import { View, StyleSheet, Text, Pressable, Image, FlatList, Button } from 'react-native';
import { goalReward, Goal, goalData } from '../types/GoalTypes';

type props = {
	DATA: goalData;
	openGoalModal(): void;
	setGoal: Function;
	setDATA?: Function;
	title: string;
	note: string | undefined;
	index: number;
	goalIsSteps: boolean;
};

export const GoalCard: React.FC<props> = ({
	DATA,
	openGoalModal,
	setGoal,
	setDATA,
	title,
	note,
	index,
	goalIsSteps
}) => {
	const updateGoal = (index: number, goalIsSteps: boolean): void => {
		let currentGoal;
		if (goalIsSteps) {
			currentGoal = DATA[0].data.find((goal: Goal) => goal.index == index);
		}
		else {
			currentGoal = DATA[1].data.find((goal: Goal) => goal.index == index);
		}

		if (!currentGoal) {
			alert('goal not found');
			return;
		}

		setGoal(
			currentGoal.goalIsSteps,
			currentGoal.title,
			currentGoal.note,
			currentGoal.difficulty,
			currentGoal.rewards
		);

		openGoalModal();
		deleteGoal(index, goalIsSteps);
	};

	const deleteGoal = (index: number, goalIsSteps: boolean): void => {
		// if (goalIsSteps) {
		// 	const updatedGoals = DATA[0].data.filter((goal) => goal.index != index);
		// 	setDATA([
		// 		{
		// 			title: 'Daily Steps Goal',
		// 			data: updatedGoals
		// 		},
		// 		{ ...DATA[1] }
		// 	]);
		// }
		// else {
		// 	const updatedGoals = DATA[1].data.filter((goal) => goal.index != index);
		// 	setDATA([
		// 		{ ...DATA[0] },
		// 		{
		// 			title: 'Daily Sleep Goal',
		// 			data: updatedGoals
		// 		}
		// 	]);
		// }
	};

	return (
		<View style={styles.goalsContainer}>
			<Text style={styles.goalsTitle}>{title}</Text>
			<Text>{note}</Text>

			<View style={styles.goalCardFooter}>
				<Pressable onPress={() => updateGoal(index, goalIsSteps)}>
					<Text style={styles.editButton}>Edit</Text>
				</Pressable>

				<Pressable onPress={() => deleteGoal(index, goalIsSteps)}>
					<Text style={styles.deleteButton}>Delete</Text>
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	goalsContainer: {
		marginLeft: 10,
		backgroundColor: '#FFFFFF',
		borderRadius: 10,
		paddingLeft: 15,
		marginBottom: 7
	},
	goalsTitle: {
		color: 'black',
		fontWeight: '700',
		fontSize: 25
	},
	editButton: {
		color: '#1E8CfB',
		marginRight: 20
	},
	deleteButton: {
		color: 'red'
	},
	goalCardFooter: {
		flexDirection: 'row'
	}
});

export default GoalCard;
