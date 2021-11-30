import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import {
	StyleSheet,
	Text,
	View,
	SectionList,
	Platform,
	Modal,
	Alert,
	Pressable,
	TextInput,
	Button
} from 'react-native';
import CircleButton from '../components/CircleButton';

import { goalReward, Goal, goalData } from '../types/GoalTypes';
import GoalCard from '../components/GoalCard';

import { useDispatch } from 'react-redux';
import * as actions from '../actions';

const Goals = () => {
	const dispatch = useDispatch();

	const [ DATA, setDATA ] = useState<goalData>([
		{
			title: 'Daily Steps Goal',
			data: []
		},
		{
			title: 'Daily Sleep Goal',
			data: []
		}
	]);

	const [ modalVisible, setModalVisible ] = useState<boolean>(false);
	const [ isNewGoalTypeSteps, setIsNewGoalTypeSteps ] = useState<boolean>(true);
	const [ newGoalTitle, setNewGoalTitle ] = useState<string>('');
	const [ newGoalNote, setNewGoalNote ] = useState<string>('');
	const [ newGoalDifficulty, setNewGoalDifficulty ] = useState<number>(1);
	const [ newGoalRewards, setNewGoalRewards ] = useState<goalReward>({
		coins: newGoalDifficulty * 2,
		jewels: 0
	});

	const setGoal = (
		isSteps: boolean = true,
		title: string = '',
		note: string = '',
		difficulty: number = 1,
		rewards?: goalReward
	): void => {
		if (!rewards) {
			rewards = {
				coins: newGoalDifficulty * 2,
				jewels: 0
			};
		}

		setIsNewGoalTypeSteps(isSteps);
		setNewGoalTitle(title);
		setNewGoalNote(note);
		setNewGoalDifficulty(difficulty);
		setNewGoalRewards(rewards);
	};

	const createGoal = (): void => {
		setNewGoalRewards({
			coins: newGoalDifficulty * 2,
			jewels: 0
		});

		const newGoal: Goal = {
			index: new Date().getTime(),
			goalIsSteps: isNewGoalTypeSteps,
			title: newGoalTitle,
			note: newGoalNote,
			difficulty: newGoalDifficulty,
			rewards: newGoalRewards
		};

		if (isNewGoalTypeSteps) {
			const newStepGoals: Goal[] = [ ...DATA[0].data, newGoal ];
			setDATA([
				{
					title: 'Daily Steps Goal',
					data: newStepGoals
				},
				{ ...DATA[1] }
			]);
		}
		else {
			const newSleepGoals: Goal[] = [ ...DATA[1].data, newGoal ];
			setDATA([
				{ ...DATA[0] },
				{
					title: 'Daily Sleep Goal',
					data: newSleepGoals
				}
			]);
		}

		setGoal(); //reset the states for goals to init values
		setModalVisible(false);
	};

	return (
		<View style={styles.container}>
			<Modal
				transparent={false}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.modalView}>
					<View style={styles.modalContent}>
						<Text style={styles.modalTitle}>New Goal</Text>

						<Text style={styles.modalText}>Type of Goal</Text>
						<View style={styles.goalType}>
							<Button title="Steps" onPress={() => setIsNewGoalTypeSteps(true)} />
							<Button title="Sleep" onPress={() => setIsNewGoalTypeSteps(false)} />
						</View>

						<Text style={styles.modalText}>Title</Text>
						<TextInput style={styles.textInput} onChangeText={setNewGoalTitle} value={newGoalTitle} />

						<Text style={styles.modalText}>Notes</Text>
						<TextInput style={styles.textInput} onChangeText={setNewGoalNote} value={newGoalNote} />

						<Text style={styles.modalText}>Difficulty</Text>
						<View style={styles.difficulty}>
							<Button title="1" onPress={() => setNewGoalDifficulty(1)} />
							<Button title="2" onPress={() => setNewGoalDifficulty(2)} />
							<Button title="3" onPress={() => setNewGoalDifficulty(3)} />
							<Button title="4" onPress={() => setNewGoalDifficulty(4)} />
							<Button title="5" onPress={() => setNewGoalDifficulty(5)} />
						</View>

						{/* <Text style={styles.modalText}>Add Reminder</Text> */}

						<View style={styles.goalClose}>
							<Pressable
								style={styles.buttonModalClose}
								onPress={() => {
									setGoal();
									setModalVisible(false);
								}}
							>
								<Text style={styles.buttonText}>Cancel</Text>
							</Pressable>

							<Pressable style={styles.buttonModalClose} onPress={() => createGoal()}>
								<Text style={styles.buttonText}>Save</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>

			<SectionList
				sections={DATA}
				keyExtractor={(item) => `${item.index}`}
				renderSectionHeader={({ section: { title } }) => <Text style={styles.goalHeader}>{title}</Text>}
				renderItem={({ item }) => (
					<GoalCard
						DATA={DATA}
						openGoalModal={() => setModalVisible(true)}
						setGoal={setGoal}
						setDATA={setDATA}
						index={item.index}
						goalIsSteps={item.goalIsSteps}
						title={item.title}
						note={item.note}
					/>
				)}
			/>

			<View style={styles.bottomView}>
				<CircleButton
					text="Btn-4"
					size={70}
					color="#00bcd4"
					textColor="white"
					margin={10}
					fontSize={20}
					source={{ uri: './plus.png' }}
					onPress={() => setModalVisible(!modalVisible)}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === 'ios' ? 20 : 0,
		marginHorizontal: 16
	},
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8
	},
	goalHeader: {
		fontSize: 32,
		margin: 10
	},
	bottomView: {
		width: '100%',
		height: 50,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		bottom: 0
	},
	modalView: {
		flex: 1,
		justifyContent: 'center',
		marginTop: 22
	},
	modalContent: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		// alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	modalTitle: {
		marginBottom: 15,
		textAlign: 'center',
		fontSize: 40
	},
	modalText: {
		marginBottom: 5,
		textAlign: 'left',
		fontSize: 15
	},
	buttonModalClose: {
		backgroundColor: '#2196F3',
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		margin: 5
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	textInput: {
		height: 40,
		marginTop: 5,
		marginBottom: 5,
		borderWidth: 1,
		padding: 10
	},
	goalType: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	difficulty: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	goalClose: {
		flexDirection: 'row',
		justifyContent: 'center'
	}
});

export default Goals;