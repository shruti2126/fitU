import React from 'react';
import { View, StyleSheet, Text, Pressable, Image, FlatList, Button } from 'react-native';
import { getAuth } from 'firebase/auth';

type homeScreenProps = {
	card_title?: string;
	goal_navigation: () => void;
};

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'Goal 1'
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Goal 2'
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Goal 3'
	}
];

const Item = ({ title }) => (
	<View>
		<Text>{title}</Text>
	</View>
);

const ProfileCard: React.FC<homeScreenProps> = ({ card_title, goal_navigation }) => {
	const auth = getAuth();

	const renderItem = ({ item }) => <Item title={item.title} />;

	return (
		<View style={styles.container}>
			<View style={styles.progress}>
				<Text style={styles.textTitle}>Today's Progress</Text>
			</View>
			<View style={styles.progress}>
				<Text style={styles.progressBody}>Steps Walked: </Text>
			</View>
			<View style={styles.progress}>
				<Text style={styles.progressBody}>Hours Slept Last night: </Text>
			</View>

			<Text style={[ styles.textTitle, { marginTop: 140 } ]}>Daily Goals</Text>

			<View style={styles.dailyGoal}>
				{/* <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} /> */}
				<Text style={styles.progressBody}>Goal 2 </Text>
				<Text style={styles.progressBody}>Goal 1 </Text>
				<Text style={styles.progressBody}>Goal 3 </Text>
			</View>
			<View style={styles.goalButton}>
				<Button title="View more goals" onPress={goal_navigation} color="#f194ff" />
			</View>
			{/* <Pressable style={styles.text_body} onPress={goal_navigation}>
				<Text style={styles.toGoals}> Click to Goals </Text>
			</Pressable> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignSelf: 'center',
		backgroundColor: 'oldlace',
		borderRadius: 20,
		height: 500,
		width: 350,
		margin: 10,
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 5
	},
	goalButton: {
		marginTop: 80
	},
	progress: {
		marginTop: 10
	},
	dailyGoal: {
		marginTop: 15
	},
	progressBody: {
		fontSize: 18,
		marginBottom: 2
	},
	toGoals: {
		marginBottom: 10,
		paddingLeft: 0
	},
	profileHeader: {
		textAlign: 'center',
		marginBottom: 20
	},
	body: {
		marginTop: 7
	},
	textTitle: {
		color: '#1F283A',
		fontWeight: '700',
		fontSize: 25
		// paddingLeft: 15
	}
});

export default ProfileCard;
