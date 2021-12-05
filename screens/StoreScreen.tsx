import React, { Dispatch } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ItemCard from '../components/itemCard';
import { StoreItem } from '../types/StoreTypes';

type storeScreenProps = {
	storeReducer: any;
	BUY_ITEM: Function;
};

const StoreScreen: React.FC<storeScreenProps> = ({ storeReducer, BUY_ITEM }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.storeHeader}>Welcome to the Store!</Text>
			<FlatList
				data={storeReducer}
				renderItem={({ item }) => <ItemCard item={item} BUY_ITEM={BUY_ITEM} />}
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
		storeReducer: state.storeReducer
	};
};

const mapDispatchToProps = (dispatch: any): {} => {
	return {
		BUY_ITEM: (item: StoreItem) => dispatch(actions.BUY_ITEM(item))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreScreen);
