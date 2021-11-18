import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SectionList,
	Platform,
	Image,
	Modal,
	Alert,
	Pressable,
	TextInput,
	Button,
	TouchableOpacity
} from 'react-native';
import CircleButton from '../components/CircleButton';

type Goal = {
	title: string;
	note?: string;
	difficulty?: number;
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

type itemProps = {
	title: string;
	notes?: string;
	difficulty?: number;
	reminder?: Date;
};

const Item: React.FC<itemProps> = ({ title, notes, difficulty, reminder }) => (
	<View style={styles.item}>
		<Text style={styles.addedGoalText}>{title}</Text>
		<Text style={styles.addedGoalText}>{difficulty}</Text>
	</View>
);

const Goals = () => {
	const [ modalVisible, setModalVisible ] = useState(false);
	const [ isNewGoalTypeSteps, setIsNewGoalTypeSteps ] = useState<boolean>();
	const [ newGoalTitle, setNewGoalTitle ] = useState<string>('');
	const [ newGoalNote, setNewGoalNote ] = useState<string>('');
	const [ newGoalDifficulty, setNewGoalDifficulty ] = useState<number>(1);

	let test = DATA[0].data;
	let x = 1;

	const saveGoal = (): void => {
		const newGoal: Goal = {
			title: newGoalTitle,
			note: newGoalNote,
			difficulty: newGoalDifficulty
		};

		if (isNewGoalTypeSteps) DATA[0].data.push(newGoal);
		else DATA[1].data.push(newGoal);

		console.log(newGoal);
		console.log(isNewGoalTypeSteps);

		setNewGoalTitle('');
		setNewGoalNote('');

		setModalVisible(!modalVisible);
		// alert("Saved Goal")
	};

	const cancelGoal = (): void => {
		setNewGoalTitle('');
		setNewGoalNote('');

		setModalVisible(!modalVisible);
		// alert("Saved Goal")
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

						<View style={styles.goalClose}>
							<Pressable style={[ styles.button, styles.buttonClose ]} onPress={() => cancelGoal()}>
								<Text style={styles.buttonText}>Cancel</Text>
							</Pressable>

							<Pressable style={[ styles.button, styles.buttonClose ]} onPress={() => saveGoal()}>
								<Text style={styles.buttonText}>Save</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>

			<SectionList
				sections={DATA}
				// keyExtractor={(item, index) => item + index}
				renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
				renderItem={({ item }) => <Item title={item.title} notes={item.note} difficulty={item.difficulty} />}
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
	header: {
		fontSize: 32,
		backgroundColor: '#fff'
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
		// alignItems: 'center',
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
		backgroundColor: '#2196F3'
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2
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
		// flex: 1
		flexDirection: 'row'
		// justifyContent: 'space-around'
	},
	goalClose: {
		flexDirection: 'row',
		justifyContent: 'center'
	}
});

export default Goals;
