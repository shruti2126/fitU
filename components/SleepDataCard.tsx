import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

//const customData = require('./FinalHealthData.json');

type dataProps = {
	data_title?: string;
	nav_function?: () => void;
};

//420, 401, 389, 376, 354
const line = {
	labels: [ 'January', 'February', 'March', 'April' ],
	datasets: [
		{
			data: [ 412, 403, 375, 371, 379, 415, 427 ],
			strokeWidth: 2 // optional
		}
	]
};

const SleepDataCard: React.FC<dataProps> = ({}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Annual Sleep</Text>
			<LineChart
				data={line}
				width={350} // from react-native
				height={350}
				yAxisSuffix={'min'}
				chartConfig={{
					backgroundColor: '#e26a00',
					backgroundGradientFrom: '#fb8c00',
					backgroundGradientTo: '#ffa726',
					decimalPlaces: 2, // optional, defaults to 2dp
					color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					style: {
						borderRadius: 16
					}
				}}
				bezier
				style={{
					marginVertical: 8,
					borderRadius: 16
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginLeft: 10,
		marginRight: 10,
		backgroundColor: 'oldlace',
		borderRadius: 10,
		paddingLeft: 15,
		marginBottom: 7,
		marginTop: 10
	},
	title: {
		color: 'black',
		fontWeight: '700',
		fontSize: 32
	},
	item: {
		backgroundColor: '#ffe4c4',
		padding: 10,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 10,
		fontSize: 15
	},
	header: {
		fontSize: 20,
		fontWeight: 'bold',
		backgroundColor: '#ffe4c4',
		padding: 10,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 10
	},
	image: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		width: '100%',
		height: '100%'
	}
});

export default SleepDataCard;
