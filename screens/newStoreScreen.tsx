import React, { Dispatch, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ItemCard from '../components/itemCard';
import { StoreItem } from '../types/StoreTypes';
import ShopBanner from '../components/ShopScreenBanner';
import ShopComp1 from '../components/ShopComp1';
import ShopComp2 from '../components/ShopComp2';
import ShopComp4 from '../components/ShopComp4';

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
	const buyItem = (itemToBuy: StoreItem) => {
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
	};

	return (
		<>
			<ShopBanner />
			<ScrollView style={{ backgroundColor: "#F0FFFF" }}>
				<ShopComp1 />
				<ShopComp2 />

			</ScrollView>
			<View style={{ backgroundColor: "#A7C7E7" }}>
				<ShopComp4 />

			</View >
			{/* separate */}
			<View>
				<View style={styles.bannerContainer}>
					<Text style={styles.bannerTitle}> ✧ Our Collections ✧</Text>
				</View>
				<View style={{ marginLeft: 10, marginRight: 10 }}>
					<Text style={styles.storeHeader} />

					<View style={styles.rewards}>
						<Text
							style={[
								styles.rewardsText,
								{
									// borderRigWidth: 1,
									borderRightWidth: 1,
									borderRightColor: '#CFCFCF'
								}
							]}
						>
							Coins: {rewardsReducer.coins}
						</Text>
						<Text style={styles.rewardsText}>Jewels: {rewardsReducer.jewels}</Text>
					</View>
				</View>
				<View style={{ backgroundColor: "#F0FFFF" }}>
					<FlatList
						data={storeReducer}
						renderItem={({ item }) => <ItemCard item={item} BUY_ITEM={() => buyItem(item)} />}
						keyExtractor={(item) => item.id}
					/>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	bannerContainer: {
		padding: 1,
		backgroundColor: '#1B2BA5'
	},
	bannerTitle: {
		// paddingVertical: 8,
		// color: '#FFFFFF',
		// fontSize: 32,
		// textAlign: 'center',
		// fontWeight: 'bold'
		paddingVertical: 8,
		color: "#FFFFFF",
		fontSize: 20,
		textAlign: "center",
		fontWeight: "bold"
	},
	storeHeader: {
		fontSize: 32
	},
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16
	},
	title: {
		fontSize: 32
	},
	rewards: {
		flexDirection: 'row',
		marginBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#CFCFCF',
		paddingBottom: 5
	},
	rewardsText: {
		flex: 1,
		textAlign: 'center',
		marginTop: 10,
		fontSize: 15
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
