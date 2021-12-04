import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StoreScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.storeHeader}>Welcome to the Store!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	storeHeader: {
		fontSize: 32,
		margin: 10
	}
});
export default StoreScreen;
