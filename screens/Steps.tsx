
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {getAuth} from 'firebase/auth'
import { NavigationRouteContext, useNavigation } from '@react-navigation/core'
import Card from "../components/Card"
import StepCard from "../components/StepCard"
import StepHighlightsCard from '../components/StepsHighlightsCard'
import AboutStepsCard from '../components/AboutStepsCard'

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
      <Text style={styles.heading}>
			Steps	{"\n"}
			</Text>
	  <StepCard card_title={"Steps"} nav_function={() => navigation.navigate("Steps")}/>
	  <Text style={styles.heading}>
			Highlights	{"\n"}
			</Text>

	  <StepHighlightsCard card_title={"Steps"} nav_function={() => navigation.navigate("Steps")}/>
	  <Text style={styles.heading}>
			About Steps	{"\n"}
			</Text>

	  <AboutStepsCard card_title={"Steps"} nav_function={() => navigation.navigate("Steps")}/>

        <TouchableOpacity
            onPress={signOut}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity>
      </View>
      </ImageBackground>
    )

    
    }
    
    export default Step;
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightskyblue'
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
        fontSize: 35,
        color: 'white'
      },
    })
