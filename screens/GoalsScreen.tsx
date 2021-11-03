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
	Button
} from 'react-native';
import CircleButton from '../components/CircleButton';

interface Goal {
	title: string;
	note?: string;
	difficulty?: number;
}

const DATA = [
	{
		title: 'Daily Steps Goal',
		data: []
	},
	{
		title: 'Daily Sleep Goal',
		data: []
	}
];

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title}</Text>
	</View>
);

const Goals = () => {
	const [ modalVisible, setModalVisible ] = useState(false);
	const [ isNewGoalTypeSteps, setIsNewGoalTypeSteps ] = useState<boolean>();
	const [ newGoalTitle, setNewGoalTitle ] = useState<string>('');
	const [ newGoalNote, setNewGoalNote ] = useState<string>('');

	let test = DATA[0].data;
	let x = 1;

	const saveGoal = (): void => {
		const newGoal: Goal = {
			title: newGoalTitle,
			note: newGoalNote
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

	return (
		<View style={styles.container}>
			<Modal
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
					setModalVisible(!modalVisible);
				}}
				presentationStyle={'fullScreen'}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalTitle}>New Goal</Text>

						<Text style={styles.modalText}>Type of Goal</Text>
						<View style={styles.fixToText}>
							<Button title="Steps" onPress={() => setIsNewGoalTypeSteps(true)} />
							<Button title="Sleep" onPress={() => setIsNewGoalTypeSteps(false)} />
						</View>

						<Text style={styles.modalText}>Title</Text>
						<TextInput style={styles.input} onChangeText={setNewGoalTitle} value={newGoalTitle} />

						<Text style={styles.modalText}>Notes</Text>
						<TextInput style={styles.input} onChangeText={setNewGoalNote} value={newGoalNote} />

						<Pressable style={[ styles.button, styles.buttonClose ]} onPress={() => saveGoal()}>
							<Text style={styles.textStyle}>Save</Text>
						</Pressable>
					</View>
				</View>
			</Modal>

			<SectionList
				sections={DATA}
				// keyExtractor={(item, index) => item + index}
				renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
				renderItem={({ item }) => <Item title={item.title} />}
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
	title: {
		fontSize: 24
	},
	bottomView: {
		width: '100%',
		height: 50,
		justifyContent: 'flex-end',
		alignItems: 'center',
		bottom: 0
	},

	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	buttonClose: {
		backgroundColor: '#2196F3'
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	modalTitle: {
		marginBottom: 15,
		textAlign: 'center',
		fontSize: 40
	},
	modalText: {
		marginBottom: 5,
		textAlign: 'left'
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2
	},
	input: {
		height: 40,
		margin: 5,
		borderWidth: 1,
		padding: 10
	},
	fixToText: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});

export default Goals;
