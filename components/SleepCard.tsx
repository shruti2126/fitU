import React, { useState } from 'react';
import { FlatList, ImageBackground, SectionList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { goalData, Goal } from '../types/GoalTypes';

type SleepCardProps = {
	goalReducer: goalData;
};

const SleepCard: React.FC<SleepCardProps> = ({ goalReducer }) => {

	const [displayData, setDisplayData] = useState<Goal>(goalReducer[1].data[0])
	const goalData = goalReducer[1];
	let goals = goalData.data;

	goals.forEach(goal => {
		if (goal.isMainGoal) {
			setDisplayData(goal)
		}
	});

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>{goalReducer[1].title}</Text>
				<Text style={styles.item}>Your Main goal: {displayData.title}</Text>
				<Text style={styles.item}>Note-to-self: {displayData.note}</Text>
				<Text style={styles.item}>Difficulty of Goal: {displayData.difficulty}</Text>
			</View>
		</View>

	);
};

const styles = StyleSheet.create({
	container: {
		marginLeft: 10,
		marginRight: 10,
		backgroundColor: 'oldlace',
		borderRadius: 10,
		paddingLeft: 15,
		marginBottom: 7,
		marginTop: 15
	},
	title: {
		color: 'black',
		fontWeight: '700',
		fontSize: 32
	},
	item: {
		backgroundColor: '#ffe4c4',
		padding: 10,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 10
	},
	header: {
		fontSize: 25,
		backgroundColor: '#fff'
	}
});

const mapStateToProps = (state: any) => {
	return {
		goalReducer: state.goalReducer
	};
};

export default connect(mapStateToProps)(SleepCard);
