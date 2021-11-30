import React from 'react';
import { View, StyleSheet, Text, Pressable, Image, FlatList, Button } from 'react-native';
import { goalReward, Goal, goalData } from '../types/GoalTypes';
import * as actions from '../actions';
import { useDispatch } from 'react-redux';

type props = {
	DATA: goalData;
	openGoalModal(): void;
	updateGoal: Function;
	deleteGoal: Function;
	title: string;
	note: string | undefined;
	index: number;
	goalIsSteps: boolean;
};

export const GoalCard: React.FC<props> = ({
	DATA,
	openGoalModal,
	updateGoal,
	deleteGoal,
	title,
	note,
	index,
	goalIsSteps
}) => {
	const dispatch = useDispatch();

	return (
		<View style={styles.goalsContainer}>
			<Text style={styles.goalsTitle}>{title}</Text>
			<Text>{note}</Text>

			<View style={styles.goalCardFooter}>
				<Pressable onPress={() => updateGoal(index, goalIsSteps)}>
					<Text style={styles.editButton}>Edit</Text>
				</Pressable>

				{/* deleteGoal(index, goalIsSteps) */}
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
