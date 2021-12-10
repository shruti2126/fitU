import React from 'react';
import { View, StyleSheet, Text, Pressable, Animated } from 'react-native';
import { StoreItem } from '../types/StoreTypes';
import Swipeable from 'react-native-gesture-handler/Swipeable';

type itemCardProps = {
	item: StoreItem;
	BUY_ITEM: Function;
};

const ItemCard: React.FC<itemCardProps> = ({ item, BUY_ITEM }) => {
	const buy_item = (): void => {
		BUY_ITEM(item);
	};

	const LeftActions = () => {
		return (
			<Pressable onPress={() => buy_item()}>
				<View style={styles.swipeable}>
					<Text style={styles.swipeableText}>Buy Item</Text>
				</View>
			</Pressable>
		);
	};

	return (
		<View>
			<Swipeable renderLeftActions={() => LeftActions()}>
				<View style={[ styles.item, styles.shadow ]}>
					<Text style={styles.title}>{item.name}</Text>

					<View style={styles.prices}>
						<Text style={[ { marginRight: 20 } ]}>Coins: {item.coins}</Text>
						<Text>Jewels: {item.jewels}</Text>
					</View>

					<Text>{item.description}</Text>

					{/* <Pressable onPress={buy_item}>
					<Text>Buy Item</Text>
				</Pressable> */}
				</View>
			</Swipeable>
		</View>
	);
};

const styles = StyleSheet.create({
	// item: {
	// 	backgroundColor: '#f9c2ff',
	// 	padding: 20,
	// 	marginVertical: 8,
	// 	marginHorizontal: 16
	// },
	prices: {
		flexDirection: 'row',
		marginBottom: 5
	},
	title: {
		fontSize: 20
	},
	description: {
		fontSize: 15
	},
	shadow: {
		shadowOffset: {
			width: 5,
			height: 8
		},
		shadowOpacity: 0.1,
		shadowRadius: 5
	},
	item: {
		alignSelf: 'center',
		backgroundColor: 'white',
		borderRadius: 4,
		// height: 150,
		shadowColor: 'black',
		width: 350,
		marginBottom: 15,
		padding: 7
	},
	swipeable: {
		flex: 1,
		backgroundColor: 'lightblue',
		justifyContent: 'center',
		// height: 90,
		// borderRadius: 4,
		borderTopEndRadius: 4,
		borderBottomEndRadius: 4
	},
	swipeableText: {
		color: 'white',
		paddingHorizontal: 10,
		fontWeight: '600'
	}
});

export default ItemCard;
