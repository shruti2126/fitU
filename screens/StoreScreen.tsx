import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StoreScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Store</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	image: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		width: '100%',
		height: '100%'
		//blurRadius: 50
	}
});
export default StoreScreen;
