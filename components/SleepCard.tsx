import React, { useState } from 'react'
import { FlatList, ImageBackground, SectionList, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { goalData } from '../types/GoalTypes'



const SleepCard = (goalData: goalData) => {

    // const [data, setData] = useState<goalData>([])


    return (
       
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{goalData.goalReducer[1].title}</Text>
                <Text style={styles.item}>Your goal: {goalData.goalReducer[1].data[0].title}</Text>
                <Text style={styles.item}>Note-to-self: {goalData.goalReducer[1].data[0].note}</Text>
                <Text style={styles.item}>Difficulty of Goal: {goalData.goalReducer[1].data[0].difficulty}</Text>
            </View>
        </View>
        
    )
}



const styles = StyleSheet.create({
    container: {
		marginLeft: 10,
        marginRight: 10,
		backgroundColor: 'oldlace',
		borderRadius: 10,
		paddingLeft: 15,
		marginBottom: 7, 
        marginTop: 15
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
        borderRadius: 10
      },
    header: {
        fontSize: 25,
        backgroundColor: "#fff"
    },
    
})

const mapStateToProps = (state: any) => {
	return state;
};

export default connect(mapStateToProps)(SleepCard);
