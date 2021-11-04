
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {getAuth} from 'firebase/auth'
import { NavigationRouteContext, useNavigation } from '@react-navigation/core'
import Card from "../components/Card"
import StepCard from "../components/StepCard"

type StepProps = {
    navigation: any;

    image?: Image;
  };

const Step: React.FC<StepProps> = ({navigation}) => {
    navigation = useNavigation()
    const auth = getAuth()
    const signOut = () => {
        auth.signOut()
        .then(() => {
            navigation.replace("Login")
        })
    }

    console.log(auth);
    

    return (
        <ImageBackground source={require("../tree.jpeg")} style={styles.image}>
      <View style={styles.container}>
      
        <StepCard>
            <View style={styles.titleContainer}>
            <Text>
                Daily average: 4,608 steps!

            </Text>
            <Image source={require('../stepimage.png')} />
            </View>
        </StepCard>
        <StepCard>
            <View style={styles.titleContainer}>
            <Text>
                Trends
            </Text>
            <Image source={require('../stepimage.png')} />
            </View>
        </StepCard>
        <StepCard>
            <View style={styles.titleContainer}>
            <Text>
                Highlights
            </Text>
            <Image source={require('../stepimage.png')} />
            </View>
        </StepCard>

        <TouchableOpacity
            onPress={signOut}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity>
      </View>
      </ImageBackground>
    )

    // return (
    //   <ImageBackground source={require("../leg.jpeg")} style={styles.image}>
    //     <View style={styles.square}></View>
    //     <View style={styles.titleContainer}>
    //       <Text style={styles.heading}>fitU</Text>
    //     </View>
    //     <View style={styles.container}>
    //       <Text>Email: {auth.currentUser?.email}</Text>
    //       <TouchableOpacity
    //         onPress={signOut}
    //         style={styles.button}
    //       >
    //         <Text style={styles.buttonText}>Sign out</Text>
    //       </TouchableOpacity>
    //     </View>
    //     </ImageBackground>
    //   )
    }
    
    export default Step;
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFFFFF"
      },
       button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
      image: {
        flex: 1,
        justifyContent: "center",
        alignContent: 'center',
        width: '100%',
        height: '100%',
      },
      text: {
        marginTop : 10
      },
      titleContainer : {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 25
      },
      heading: {
        fontSize: 100,
        color: "#702963"
      },
    })
