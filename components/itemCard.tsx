import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { StoreItem } from '../types/StoreTypes';

type itemCardProps = {
	item: StoreItem;
	BUY_ITEM: Function;
};

const ItemCard: React.FC<itemCardProps> = ({ item, BUY_ITEM }) => {
	return (
		<View style={styles.item}>
			<Text style={styles.title}>{item.name}</Text>

			<View style={styles.prices}>
				<Text style={[ styles.title, { marginRight: 20 } ]}>Coins: {item.coins}</Text>
				<Text style={styles.title}>Jewels: {item.jewels}</Text>
			</View>

			<Text style={styles.title}>{item.description}</Text>

			<Pressable onPress={() => BUY_ITEM(item)}>
				<Text>Buy Item</Text>
			</Pressable>
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
	prices: {
		flexDirection: 'row'
	},
	title: {
		fontSize: 20
	}
});

export default ItemCard;
