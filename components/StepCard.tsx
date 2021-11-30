import React from 'react'
import { View, StyleSheet, Text, Pressable, Image, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import {getAuth} from 'firebase/auth'


type StepProps = {
    card_title?: string;
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

const StepsCard: React.FC<StepProps> = ({ }) => {

	return (
		<View style={styles.container}>
			<Text style={styles.text_title}>
				Daily Average 5,573 steps{"\n"}
                Nov 21-27 2021{"\n"}
                *graph*
				
			</Text>

		</View>
	)
}
export default StepsCard;