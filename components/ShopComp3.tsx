import React from "react";
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

interface Props { }

const ShopComp2: React.FC<Props> = (props) => {
    return (
        <View style={styles.container} >
            <Text style={styles.text}> Getting started is easy.</Text>
            <Text style={styles.description}> Accomplish daily goals to earn coins.</Text>
            <Text style={styles.description}> </Text>
            <Text style={styles.sub}> ① Create your goals.</Text>
            <Text style={styles.sub}> ② Keep track of the goals based on correlation graphs.</Text>
            <Text style={styles.sub}> ③ Earn stars and coins as rewards!</Text>
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
    }
});

export default ShopComp2;
