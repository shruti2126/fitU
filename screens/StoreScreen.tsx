import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ItemCard from '../components/itemCard';

type storeScreenProps = {
	storeReducer: any;
};

const StoreScreen: React.FC<storeScreenProps> = ({ storeReducer }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.storeHeader}>Welcome to the Store!</Text>
			<FlatList
				data={storeReducer}
				renderItem={({ item }) => (
					<ItemCard
						id={item.id}
						name={item.name}
						description={item.description}
						coins={item.coins}
						jewels={item.jewels}
						isBought={item.isBought}
						effect={item.effect}
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
		storeReducer: state.storeReducer
	};
};

export default connect(mapStateToProps)(StoreScreen);
