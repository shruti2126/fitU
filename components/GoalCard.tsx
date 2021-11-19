import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

type homeScreenProps = {
	title: string;
	notes?: string;
};

const Card: React.FC<homeScreenProps> = ({ title: title, notes }) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.text_title}>{title}</Text>
				<Text>{notes}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginLeft: 10,
		backgroundColor: '#FFFFFF',
		borderRadius: 10
	},
	header: { paddingLeft: 15 },
	text_title: {
		color: 'black',
		fontWeight: '700',
		fontSize: 25
	}
});

export default Card;
