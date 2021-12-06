import React, { useState } from 'react';
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
	Button,
	Switch
} from 'react-native';
import CircleButton from '../components/CircleButton';

import { goalReward, Goal } from '../types/GoalTypes';
import GoalCard from '../components/GoalCard';

import { connect } from 'react-redux';
import * as actions from '../actions';
import { ItemEffect, StoreItem } from '../types/StoreTypes';

type goalsScreenProps = {
	goalsData: any;
	inventory: any;
	ADD_GOAL: Function;
	DELETE_GOAL: Function;
	INCREASE_REWARDS: Function;
	ADD_INVENTORY_ITEM: Function;
};

<<<<<<< HEAD
const Goals: React.FC<goalsScreenProps> = ({
	goalsData,
	inventory,
	ADD_GOAL,
	DELETE_GOAL,
	INCREASE_REWARDS,
	ADD_INVENTORY_ITEM
}) => {
	const [ modalVisible, setModalVisible ] = useState<boolean>(false);
	const [ isNewGoalTypeSteps, setIsNewGoalTypeSteps ] = useState<boolean>(true);
	const [ newGoalTitle, setNewGoalTitle ] = useState<string>('');
	const [ newGoalNote, setNewGoalNote ] = useState<string>('');
	const [ newGoalDifficulty, setNewGoalDifficulty ] = useState<number>(1);
=======
const Goals: React.FC<goalsScreenProps> = ({ goalsData, ADD_GOAL, DELETE_GOAL, INCREASE_REWARDS }) => {
	const [modalVisible, setModalVisible] = useState<boolean>(false);
	const [isNewGoalTypeSteps, setIsNewGoalTypeSteps] = useState<boolean>(true);
	const [newGoalTitle, setNewGoalTitle] = useState<string>('');
	const [newGoalNote, setNewGoalNote] = useState<string>('');
	const [newGoalDifficulty, setNewGoalDifficulty] = useState<number>(1);
>>>>>>> master

	const [isEnabled, setIsEnabled] = useState(false); // isMainGoal attribute

	const setGoalStates = (
		isSteps: boolean = true,
		isSwitchEnabled: boolean = false,
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
		setIsEnabled(isSwitchEnabled);
		setNewGoalTitle(title);
		setNewGoalNote(note);
		setNewGoalDifficulty(difficulty);
	};

	const doesMainGoalExist = (): boolean => {
		let doesExist = false;
		if (isNewGoalTypeSteps) {
			goalsData[0].data.forEach((goal: Goal) => {
				if (goal.isMainGoal) {
					alert('Steps main Goal already exists');
					doesExist = true;
				}
			});
		}
		else {
			goalsData[1].data.forEach((goal: Goal) => {
				if (goal.isMainGoal) {
					alert('Sleep main Goal already exists');
					doesExist = true;
				}
			});
		}
		return doesExist;
	};

	const toggleSwitch = (): void => {
		const isExist: boolean = doesMainGoalExist();
		console.log(isExist);

		if (isExist && !isEnabled) {
			setIsEnabled(false);
			return;
		}
		if (!isExist && isEnabled) {
			setIsEnabled(false);
			return;
		}
		else if (!isExist) {
			setIsEnabled(true);
			return;
		}
	};

	const createGoal = (): void => {
		let newRewards: goalReward;
		if (isEnabled) {
			newRewards = {
				coins: 0,
				jewels: newGoalDifficulty
			};
		}
		else {
			newRewards = {
				coins: newGoalDifficulty * 2,
				jewels: 0
			};
		}

		const newGoal: Goal = {
			index: new Date().getTime(),
			goalIsSteps: isNewGoalTypeSteps,
			isMainGoal: isEnabled,
			title: newGoalTitle,
			note: newGoalNote,
			difficulty: newGoalDifficulty,
			rewards: newRewards
		};

		// console.log(newGoal);
		ADD_GOAL(newGoal);

		setGoalStates(); //reset the states for goals to init values
		setModalVisible(false);
	};

	const findGoal = (index: number, goalIsSteps: boolean): Goal => {
		let currentGoal;
		if (goalIsSteps) currentGoal = goalsData[0].data.find((goal: Goal) => goal.index == index);
		else currentGoal = goalsData[1].data.find((goal: Goal) => goal.index == index);
		return currentGoal;
	};

	const updateGoal = (index: number, goalIsSteps: boolean): void => {
		let currentGoal = findGoal(index, goalIsSteps);
		if (!currentGoal) {
			alert('goal not found');
			return;
		}

		setGoalStates(
			currentGoal.goalIsSteps,
			currentGoal.isMainGoal,
			currentGoal.title,
			currentGoal.note,
			currentGoal.difficulty,
			currentGoal.rewards
		);

		setModalVisible(true);
		deleteGoal(index, goalIsSteps);
	};

	const deleteGoal = (index: number, goalIsSteps: boolean): void => {
		let currentGoal = findGoal(index, goalIsSteps);
		if (!currentGoal) {
			alert('goal not found');
			return;
		}

		DELETE_GOAL(currentGoal);
	};

	const completeGoal = (index: number, goalIsSteps: boolean): void => {
		let currentGoal = findGoal(index, goalIsSteps);
		if (!currentGoal) {
			alert('goal not found');
			return;
		}

		let effect: ItemEffect = undefined;
		inventory.forEach((item: StoreItem) => {
			// if (item.effect.type === 'increaseRewards')
			effect = item.effect;
		});
		console.log('test');
		console.log(effect);

		if (currentGoal.isMainGoal)
			INCREASE_REWARDS({ rewardType: 'jewels', amount: currentGoal.rewards.jewels, effect: effect });
		else INCREASE_REWARDS({ rewardType: 'coins', amount: currentGoal.rewards.coins, effect: effect });
		DELETE_GOAL(currentGoal);
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

						<View style={styles.mainGoal}>
							<Text style={styles.modalText}>Set main goal?</Text>
							<Switch
								style={styles.mainGoalSwitch}
								trackColor={{ false: '#767577', true: '#81b0ff' }}
								thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
								ios_backgroundColor="#3e3e3e"
								onValueChange={() => toggleSwitch()}
								value={isEnabled}
							/>
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
									setGoalStates();
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
				sections={goalsData}
				keyExtractor={(item) => `${item.index}`}
				renderSectionHeader={({ section: { title } }) => <Text style={styles.goalHeader}>{title}</Text>}
				renderItem={({ item }) => (
					<GoalCard
						updateGoal={updateGoal}
						deleteGoal={deleteGoal}
						completeGoal={completeGoal}
						index={item.index}
						isMainGoal={item.isMainGoal}
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
	mainGoal: {
		flexDirection: 'row'
	},
	mainGoalSwitch: {
		// justifyContent: 'flex-end'
		// alignContent: 'space-between'
		marginLeft: 60
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

const mapStateToProps = (state: any) => {
	return {
		goalsData: state.goalReducer,
		inventory: state.inventoryReducer
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		ADD_GOAL: (newGoal: Goal) => dispatch(actions.ADD_GOAL(newGoal)),
		DELETE_GOAL: (currentGoal: Goal) => dispatch(actions.DELETE_GOAL(currentGoal)),
		INCREASE_REWARDS: (rewards: { rewardType: string; amount: number; effect: ItemEffect }) =>
			dispatch(actions.INCREASE_REWARDS(rewards)),
		ADD_INVENTORY_ITEM: (item: StoreItem) => dispatch(actions.ADD_ITEM(item))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Goals);
