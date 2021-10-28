import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'

type homeScreenProps = {
    card_title?: string;
};

const ProfileCard: React.FC<homeScreenProps> = ({ 
    card_title,
}) => {
    return (
        <View>
            <View style={styles.container}>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        backgroundColor: "#E8E8E8",
        borderRadius: 10,
        height: 200,
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

export default ProfileCard
