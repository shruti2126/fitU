import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StoreItem } from '../types/StoreTypes';

const ItemCard: React.FC<StoreItem> = ({ name }) => {
	return (
		<View style={styles.item}>
			<Text style={styles.title}>{name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16
	},
	title: {
		fontSize: 32
	}
});

export default ItemCard;
