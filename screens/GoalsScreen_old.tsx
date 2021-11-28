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
	Button
} from 'react-native';
import CircleButton from '../components/CircleButton';

let index: number = 0;

type goalReward = {
	coins: number;
	jewels: number;
};

type Goal = {
	index: number;
	goalIsSteps: boolean;
	title: string;
	note?: string;
	difficulty?: number;
	rewards?: goalReward;
	reminder?: Date;
};

const DATA: {
	title: string;
	data: Goal[];
}[] = [
	{
		title: 'Daily Steps Goal',
		data: []
	},
	{
		title: 'Daily Sleep Goal',
		data: []
	}
];

const deleteGoal = (index: number, goalIsSteps: boolean): void => {
	if (goalIsSteps) DATA[0].data.splice(0, 1);
	alert(DATA[0].data.length);
	// else DATA[1].data.splice(index, 1);
	// console.log(index);
	// console.log(DATA[0].data);
};

const Item: React.FC<Goal> = ({ index, goalIsSteps, title, note, difficulty, reminder }) => (
	<View style={styles.goalsContainer}>
		<Text style={styles.goalsTitle}>{title}</Text>
		<Text>{note}</Text>
		<Pressable onPress={() => deleteGoal(index, goalIsSteps)}>
			<Text style={styles.editButton}>Delete</Text>
		</Pressable>
	</View>
);

const Goals = () => {
	const [ modalVisible, setModalVisible ] = useState(false);
	const [ isNewGoalTypeSteps, setIsNewGoalTypeSteps ] = useState<boolean>(true);
	const [ newGoalTitle, setNewGoalTitle ] = useState<string>('');
	const [ newGoalNote, setNewGoalNote ] = useState<string>('');
	const [ newGoalDifficulty, setNewGoalDifficulty ] = useState<number>(1);
	const [ newGoalRewards, setNewGoalRewards ] = useState<goalReward>({
		coins: newGoalDifficulty * 2,
		jewels: 0
	});

	let test = DATA[0].data;
	let x = 1;

	const resetGoal = (): void => {
		setIsNewGoalTypeSteps(true);
		setNewGoalTitle('');
		setNewGoalNote('');
		setNewGoalDifficulty(1);
		setNewGoalRewards({
			coins: newGoalDifficulty * 2,
			jewels: 0
		});
		setModalVisible(!modalVisible);
	};

	const saveGoal = (): void => {
		setNewGoalRewards({
			coins: newGoalDifficulty * 2,
			jewels: 0
		});
		const newGoal: Goal = {
			index: index,
			goalIsSteps: isNewGoalTypeSteps,
			title: newGoalTitle,
			note: newGoalNote,
			difficulty: newGoalDifficulty,
			rewards: newGoalRewards
		};

		if (isNewGoalTypeSteps) DATA[0].data.push(newGoal);
		else DATA[1].data.push(newGoal);

		resetGoal();
		index++;
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
				// presentationStyle={'fullScreen'}
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

						<Text style={styles.modalText}>Add Reminder</Text>

						<View style={styles.goalClose}>
							<Pressable style={styles.buttonClose} onPress={() => resetGoal()}>
								<Text style={styles.buttonText}>Cancel</Text>
							</Pressable>

							<Pressable style={styles.buttonClose} onPress={() => saveGoal()}>
								<Text style={styles.buttonText}>Save</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>

			<SectionList
				sections={DATA}
				// keyExtractor={(item, index) => index}
				renderSectionHeader={({ section: { title } }) => <Text style={styles.goalHeader}>{title}</Text>}
				renderItem={({ item }) => (
					<Item
						index={index}
						goalIsSteps={isNewGoalTypeSteps}
						title={item.title}
						note={item.note}
						difficulty={item.difficulty}
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
	goalHeader: {
		fontSize: 32,
		margin: 10
	},
	addedGoalText: {
		fontSize: 24
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
	buttonClose: {
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
	},
	editButton: {
		color: '#1E8CfB'
		// fontSize: 100
	}
});

export default Goals;
