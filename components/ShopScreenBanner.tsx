import React from "react";
import { View, StyleSheet, Text } from 'react-native';

interface Props { }

const ShopBanner: React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> ✧Reward Center✧</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 1,
        backgroundColor: "#1B2BA5",

    },
    title: {
        paddingVertical: 8,
        color: "#FFFFFF",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold"
    }
});


export default ShopBanner;
