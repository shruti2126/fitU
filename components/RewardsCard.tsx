import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

type RewardsProps = {
	coins?: number;
	jewels?: number;
};

const rewardsCard: React.FC<RewardsProps> = ({ coins, jewels }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.textTitle}>Rewards</Text>
			<Text style={styles.textBody}>Coins: {coins}</Text>
			<Text style={styles.textBody}>Jewels: {jewels}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignSelf: 'center',
		backgroundColor: 'oldlace',
		borderRadius: 20,
		height: 100,
		width: 350,
		margin: 10,
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 5
	},
	textTitle: {
		color: '#1F283A',
		fontWeight: '700',
		fontSize: 25
		// paddingLeft: 15
	},
	textBody: {
		fontSize: 18,
		marginBottom: 5
	}
});

const mapStateToProps = (state: any) => {
	return {
		coins: state.rewardsReducer.coins,
		jewels: state.rewardsReducer.jewels
	};
};

export default connect(mapStateToProps)(rewardsCard);
