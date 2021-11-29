import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

type homeScreenProps = {
	card_title: string;
	nav_function?: () => void;
};

const Card: React.FC<homeScreenProps> = ({ card_title, nav_function }) => {
	return (
		<View style={styles.frame}>
			<View style={styles.header}>
				<Text style={styles.text_title}>{card_title} Sector</Text>
			</View>
			<TouchableOpacity onPress={nav_function} activeOpacity={0.6}>
				<View style={styles.container}>
					{/* <View style={styles.header}>
						<Text style={styles.text_title}>{card_title}</Text>
					</View> */}
					<View style={styles.body}>
						<Text style={styles.text_body}>Set Goal:</Text>
					</View>
					<View style={styles.body}>
						<Text style={styles.text_body}>Progress:</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignSelf: 'center',
		backgroundColor: 'oldlace',
		borderRadius: 20,
		height: 200,
		width: 350,
		margin: 10,
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 5,
		paddingBottom: 5,
	},
	frame: {
		alignSelf: 'center',
		// backgroundColor: 'oldlace',
		paddingTop: 20,
		height: 280,
		width: 400
	},
	header: {
		alignSelf: 'center',
	},
	body: {
		marginTop: 5,
		marginBottom: 45,
	},
	text_title: {
		color: 'white',
		fontWeight: '700',
		fontSize: 25,
		// paddingLeft: 15
	},
	text_body: {
		fontSize: 20,
		marginBottom: 2
	}
});

export default Card;
