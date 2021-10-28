import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'

type homeScreenProps = {
    card_title: string;
    nav_function?: () => void
};

const Card: React.FC<homeScreenProps> = ({ 
    card_title,
    nav_function,
}) => {
    return (
        <TouchableOpacity 
            onPress={nav_function}
            activeOpacity={0.6}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_title}>{card_title}</Text>
                </View>

                <View style={styles.body}>
                    <Text style={styles.text_body}>Set Goal:</Text>
                    <Text style={styles.text_body}>Progress:</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        backgroundColor: "#E8E8E8",
        borderRadius: 10,
        height: 100,
        width: 350,
        margin: 10,
        paddingLeft: 15,
        paddingTop: 5
    },
    header: {},
    body: {
        marginTop: 7
    },
    text_title: {
        color: "#1F283A",
        fontWeight: "700",
        fontSize: 25,
        // paddingLeft: 15
    },
    text_body: {
        marginBottom: 2
    },
})

export default Card
