import React from 'react'
import { View, StyleSheet, Text, Pressable, Image, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import { getAuth } from 'firebase/auth'


type stepHighlightsProps = {
	stepHighlightsCard_title?: string;
	nav_function?: () => void;
};


const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
		backgroundColor: 'linen',
		borderRadius: 10,
		height: 300,
		width: 350,
		margin: 10,
		paddingLeft: 15,
		paddingTop: 5
	},
	profile_header: {
		textAlign: "center",
		marginBottom: 20
	},
	header: {},
	body: {
		marginTop: 7
	},
	text_title: {
		color: "#1F283A",
		fontWeight: "400",
		fontSize: 20,
		// paddingLeft: 15
	},
	text_body: {
		marginBottom: 2
	},
	image: {
		flex: 1,
		justifyContent: "center",
		alignContent: 'center',
		width: '100%',
		height: '100%',
	}
})



const AboutStepsCard: React.FC<stepHighlightsProps> = ({ }) => {

	return (
		<View style={styles.container}>
			<Text style={styles.text_title}>
				Step count is the number of steps you take throughout the day.{"\n"}
				Walking at least 30 minutes a day, five days a week can reduce
				your risk for coronary heart disease by about 19 percent.
			</Text>

		</View>
	)
}


export default AboutStepsCard;
