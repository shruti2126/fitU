import React, { Dispatch } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ItemCard from '../components/itemCard';
import { StoreItem } from '../types/StoreTypes';

type storeScreenProps = {
	storeReducer: any;
	rewardsReducer: any;
	BUY_ITEM: Function;
	ADD_INVENTORY_ITEM: Function;
	DECREASE_REWARD: Function;
};

const StoreScreen: React.FC<storeScreenProps> = ({
	storeReducer,
	rewardsReducer,
	BUY_ITEM,
	ADD_INVENTORY_ITEM,
	DECREASE_REWARD
}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.storeHeader}>Welcome to the Store!</Text>
			<FlatList
				data={storeReducer}
				renderItem={({ item }) => (
					<ItemCard
						item={item}
						BUY_ITEM={(itemToBuy: StoreItem) => {
							// console.log(rewardsReducer);
							// console.log(itemToBuy);

							if (rewardsReducer.coins < itemToBuy.coins && rewardsReducer.jewels < itemToBuy.jewels) {
								alert('Not enough coins and Jewels');
								return;
							}
							else if (rewardsReducer.coins < itemToBuy.coins) {
								alert('Not enough coins');
								return;
							}
							else if (rewardsReducer.jewels < itemToBuy.jewels) {
								alert('Not enough jewels');
								return;
							}
							else {
								BUY_ITEM(itemToBuy);
								DECREASE_REWARD(itemToBuy);
								ADD_INVENTORY_ITEM(itemToBuy);
							}
						}}
					/>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	storeHeader: {
		fontSize: 32,
		margin: 10
	},
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

const mapStateToProps = (state: any): {} => {
	return {
		storeReducer: state.storeReducer,
		rewardsReducer: state.rewardsReducer
	};
};

const mapDispatchToProps = (dispatch: any): {} => {
	return {
		BUY_ITEM: (item: StoreItem) => dispatch(actions.BUY_ITEM(item)),
		ADD_INVENTORY_ITEM: (item: StoreItem) => dispatch(actions.ADD_ITEM(item)),
		DECREASE_REWARD: (item: StoreItem) => dispatch(actions.DECREASE_REWARDS(item))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreScreen);
