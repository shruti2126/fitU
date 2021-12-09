import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

type ShopComp2Props = {
    navigation: any;
};


const ShopComp2: React.FC<ShopComp2Props> = ({ navigation }) => {
    navigation = useNavigation();
    const directToGoal = () => { navigation.navigate('Goals') };
    return (
        <View style={styles.container} >
            <Text style={styles.text}> Getting started is easy.</Text>
            <TouchableOpacity onPress={directToGoal}>
                <Text style={styles.description}> Accomplish goals to earn coins and jewels.</Text>
            </TouchableOpacity>
            <Text style={styles.text}> </Text>
            <Text style={styles.sub}> ① Create your goals.</Text>
            <Text style={styles.sub}> ② Keep track of the goals based on correlation graphs.</Text>
            <Text style={styles.sub}> ③ Earn coins and jewels as rewards!</Text>
            <Text style={styles.text}> </Text>
            <Text style={styles.text}> </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexwrap: "wrap",
        alignItems: "center",
        textAlign: "center",
        marginVertical: "5%",
    },
    text: {
        color: "#000000",
        fontSize: 30,
        fontWeight: "bold",
    },
    description: {
        color: "#0F52BA",
        fontSize: 20,
        textDecorationLine: 'underline'
    },
    sub: {
        alignItems: "center",
        color: "#000000",
        fontSize: 20,
    },
    balance: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold",
    }
});

export default ShopComp2;
