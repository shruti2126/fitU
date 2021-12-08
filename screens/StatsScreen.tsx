import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList, SafeAreaView, } from 'react-native';
import StatsCard from '../components/StatsCards';
import { useState } from "react";
import { getAuth } from 'firebase/auth';
import { NavigationRouteContext, useNavigation, Route } from '@react-navigation/core';
import Card from '../components/Card';
import ProfileCard from '../components/ProfileCard';
import RewardsCard from '../components/RewardsCard';
import { NavigationContainer } from '@react-navigation/native';

type StatsProps = {
    navigation: any;
    backgroundColor: any;
    textColor: any;
    item: any;
    image?: Image;
};

// const SelectionData = [
//     {
//         id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//         title: "Sleep",
//     },
//     {
//         id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//         title: "Step",
//     },
//     {
//         id: "58694a0f-3da1-471f-bd96-145571e29d72",
//         title: "Calories Intake",
//     },
//     {
//         id: "58694a0f-3da1-471f-bd96-145571e29d72",
//         title: "Example 4",
//     },
//     {
//         id: "58694a0f-3da1-471f-bd96-145571e29d72",
//         title: "Example 5",
//     },
//     {
//         id: "58694a0f-3da1-471f-bd96-145571e29d72",
//         title: "Example 6",
//     },
// ];

// const SelectionItem: React.FC<StatsProps> = ({ navigation, backgroundColor, item, textColor }) => (
//     <TouchableOpacity onPress={navigation} style={[styles.item, backgroundColor]}>
//         <Text style={[styles.title, textColor]}>{item.title}</Text>
//     </TouchableOpacity>
// );

const Stats: React.FC<StatsProps> = ({ navigation }) => {

    // const [selectedId, setSelectedId] = useState(null);

    // const renderItem: React.FC<StatsProps> = ({ item }) => {
    //     const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    //     const color = item.id === selectedId ? 'white' : 'black';

    //     return (
    //         <SelectionItem
    //             item={item}
    //             onPress={() => setSelectedId(item.id)}
    //             backgroundColor={{ backgroundColor }}
    //             textColor={{ color }}
    //         />
    //     );
    // };

    return (
        <ImageBackground source={require('../Stats_background.png')} style={styles.image}>

            {/* <SafeAreaView style={styles.container}>

                <Text style={styles.title}>
                    Select one of the following to see correlation{"\n"}
                </Text>
                <FlatList style={styles.title}
                    data={SelectionData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                    onPress={navigation} color="#f194ff"
                />

            </SafeAreaView>  */}

            <ScrollView>
                <View style={styles.container}>

                    <View style={styles.title_header}>
                        <Text style={styles.title}>Correlation and Facts</Text>
                    </View>

                    <View>
                        <StatsCard />
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Step-Weight')} style={styles.button}>
                        <Text style={styles.buttonText}>Run correlation on your Steps vs. Weight</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Sleep-Weight')} style={styles.button}>
                        <Text style={styles.buttonText}>Run correlation on your Sleep vs. Weight</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>


        </ImageBackground>
    );
};

export default Stats;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
        // backgroundColor: '#FFFFFF'
        // backgroundColor: 'aliceblue'
    },
    common: {
        width: 450,
        height: 250,
    },
    StatsButton: {
        marginTop: 10,
        paddingBottom: 40
    },
    title: {
        color: 'black',
        fontWeight: '700',
        fontSize: 30,
        paddingBottom: 15
    },
    title_header: {
        textAlign: 'center',
        marginTop: 25
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    row: {
        flex: 1,
        justifyContent: 'space-between',
        // alignItems: 'center',
        alignContent: 'space-between',
        flexDirection: 'row'
        // backgroundColor: '#FFFFFF'
        // backgroundColor: 'aliceblue'
    },
    button: {
        backgroundColor: '#0782F9',
        width: '90%',
        padding: 15,
        justifyContent: 'space-between',
        alignContent: 'center',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%'
        // blurRadius: 50
    }
    // image: {
    // 	flex: 1,
    // 	justifyContent: 'center',
    // 	alignContent: 'center',
    // 	width: '100%',
    // 	height: '100%'
    // },
    // text: {
    // 	marginTop: 10
    // },
    // titleContainer: {
    // 	width: '100%',
    // 	justifyContent: 'center',
    // 	alignItems: 'center',
    // 	marginTop: 15,
    // 	marginBottom: 25
    // },
    // heading: {
    // 	fontSize: 100,
    // 	color: '#702963'
    // }
});