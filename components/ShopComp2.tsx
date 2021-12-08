import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

type ShopComp2Props = {
    navigation: any;
};
const coin = 100;
const jewl = 0;

const ShopComp2: React.FC<ShopComp2Props> = ({ navigation }) => {
    navigation = useNavigation();
    const directToGoal = () => { navigation.navigate('Steps') };
    const [new_coin, setCoin] = useState(coin);
    const [new_jewl, setJewl] = useState(jewl);
    const updateBalance = () => {
        if (new_coin <= 0) {
            alert('Complete your goals to earn more coins!');
            return;
        }
        setCoin(new_coin => new_coin - 10);
        setJewl(new_jewl => new_jewl + 1);
    };
    return (
        <View style={styles.container} >
            <Text style={styles.text}> Getting started is easy.</Text>
            <TouchableOpacity onPress={directToGoal}>
                <Text style={styles.description}> Accomplish daily goals to earn coins.</Text>
            </TouchableOpacity>
            <Text style={styles.description}> Use coins in exchange for stars.</Text>
            <Text style={styles.text}> </Text>
            <Text style={styles.sub}> ① Create your goals.</Text>
            <Text style={styles.sub}> ② Keep track of the goals based on correlation graphs.</Text>
            <Text style={styles.sub}> ③ Earn coins and stars as rewards!</Text>
            <Text style={styles.text}> </Text>
            <Text style={styles.text}> </Text>
            <Text style={styles.balance}>Your coin balance:  {new_coin}  </Text>
            <Text style={styles.balance}>Your star balance:   {new_jewl}  </Text>
            <TouchableOpacity onPress={updateBalance}>
                <Text style={styles.description}>10 coins = 1 star</Text>
            </TouchableOpacity>
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
