import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, ImageBackground, Text, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

export default class ShopComp3 extends Component {
    scrollView: any;

    componentDidMount() {
        setTimeout(() => { this.scrollView.scrollTo({ x: -40 }) }, 1) // scroll view position fix
    }

    render() {
        return (
            <ScrollView
                ref={(scrollView) => { this.scrollView = scrollView; }}
                style={styles1.container}
                //pagingEnabled={true}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                decelerationRate="fast"
                snapToInterval={width - 60}
                snapToAlignment={"center"}
                contentInset={{
                    top: 0,
                    left: 30,
                    bottom: 0,
                    right: 30,
                }}>
                <View style={styles1.view}>
                    <ImageBackground source={require("./ShopImage/coffee.webp")} style={styles2.backgroundImage} imageStyle={{
                        resizeMode: 'cover'

                    }} >
                        <ImageBackground source={require("./ShopImage/c10j0.png")} style={styles2.icon} imageStyle={{
                            resizeMode: 'cover'
                        }} >
                        </ImageBackground>
                    </ImageBackground>
                    {/* <TouchableOpacity
                        style={styles2.button}
                        onPress={() => { }}
                    >
                        <Text style={styles2.text}>get Reward</Text>
                    </TouchableOpacity> */}
                </View>
                <View style={styles1.view}>
                    <ImageBackground source={require("./ShopImage/salad.webp")} style={styles2.backgroundImage} imageStyle={{
                        resizeMode: 'cover'
                    }} >
                        <ImageBackground source={require("./ShopImage/c0j20.png")} style={styles2.icon} imageStyle={{
                            resizeMode: 'cover'
                        }} >
                        </ImageBackground>
                    </ImageBackground>
                    {/* <TouchableOpacity
                        style={styles2.button}
                        onPress={() => { }}
                    >
                        <Text style={styles2.text}>get Reward</Text>
                    </TouchableOpacity> */}
                </View>
                <View style={styles1.view}>
                    <ImageBackground source={require("./ShopImage/cap.png")} style={styles2.backgroundImage} imageStyle={{
                        resizeMode: 'cover'
                    }} >
                        <ImageBackground source={require("./ShopImage/c10j10.png")} style={styles2.icon} imageStyle={{
                            resizeMode: 'cover'
                        }} >
                        </ImageBackground>
                    </ImageBackground>
                    {/* <TouchableOpacity
                        style={styles2.button}
                        onPress={() => { }}
                    >
                        <Text style={styles2.text}>get Reward</Text>
                    </TouchableOpacity> */}
                </View>
                <View style={styles1.view}>
                    <ImageBackground source={require("./ShopImage/shirt.png")} style={styles2.backgroundImage} imageStyle={{
                        resizeMode: 'cover'
                    }} >
                        <ImageBackground source={require("./ShopImage/c20j20.png")} style={styles2.icon} imageStyle={{
                            resizeMode: 'cover'
                        }} >
                        </ImageBackground>
                    </ImageBackground>
                    {/* <TouchableOpacity
                        style={styles2.button}
                        onPress={() => { }}
                    >
                        <Text style={styles2.text}>get Reward</Text>
                    </TouchableOpacity> */}
                </View>
                <View style={styles1.view}>
                    <ImageBackground source={require("./ShopImage/sneakers.png")} style={styles2.backgroundImage} imageStyle={{
                        resizeMode: 'cover'
                    }} >
                        <ImageBackground source={require("./ShopImage/c100j0.png")} style={styles2.icon} imageStyle={{
                            resizeMode: 'cover'
                        }} >
                        </ImageBackground>
                    </ImageBackground>
                    {/* <TouchableOpacity
                        style={styles2.button}
                        onPress={() => { }}
                    >
                        <Text style={styles2.text}>get Reward</Text>
                    </TouchableOpacity> */}
                </View>
                <View style={styles1.view}>
                    <ImageBackground source={require("./ShopImage/bike.png")} style={styles2.backgroundImage} imageStyle={{
                        resizeMode: 'cover'
                    }} >
                        <ImageBackground source={require("./ShopImage/c100j100.png")} style={styles2.icon} imageStyle={{
                            resizeMode: 'cover'
                        }} >
                        </ImageBackground>
                    </ImageBackground>
                    {/* <TouchableOpacity
                        style={styles2.button}
                        onPress={() => { }}
                    >
                        <Text style={styles2.text}>get Reward</Text>
                    </TouchableOpacity> */}
                </View>
                <View style={styles1.view}>
                    <ImageBackground source={require("./ShopImage/watch.png")} style={styles2.backgroundImage} imageStyle={{
                        resizeMode: 'cover'
                    }} >
                        <ImageBackground source={require("./ShopImage/c200j200.png")} style={styles2.icon} imageStyle={{
                            resizeMode: 'cover'
                        }} >
                        </ImageBackground>
                    </ImageBackground>
                    {/* <TouchableOpacity
                        style={styles2.button}
                        onPress={() => { }}
                    >
                        <Text style={styles2.text}>get Reward</Text>
                    </TouchableOpacity> */}
                </View>
            </ScrollView>
        );
    }
}

const styles1 = StyleSheet.create({
    container: {},
    view: {
        marginVertical: 70,
        backgroundColor: "#6F8FAF",
        width: width - 80,
        margin: 10,
        height: 200,
        borderRadius: 15,
        //paddingHorizontal : 30
    }
});

const styles2 = StyleSheet.create({
    container: {
        // whole component(including carousel)'s container 
        flexwrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#87CEEB",
        marginTop: "5%"
    },
    text: {
        color: "#00008B",
        fontSize: 13,
        fontWeight: "bold"
    },
    backgroundImage: {
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "#B6D0E2",
    },
    icon: {
        alignItems: "flex-start",
        height: "50%",
        width: "50%",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#00FFFF",
        opacity: 0.3,
        padding: 2,
    }
});