
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {getAuth} from 'firebase/auth'
import { NavigationRouteContext, useNavigation } from '@react-navigation/core'

type homeScreenProps = {
    navigation: any;
  };

const HomeScreen: React.FC<homeScreenProps> = ({navigation}) => {
    navigation = useNavigation()
    const auth = getAuth()
    const signOut = () => {
        auth.signOut()
        .then(() => {
            navigation.replace("Login")
        })
    }
    return (
        <View style={styles.container}>
          <Text>Email: {auth.currentUser?.email}</Text>
          <TouchableOpacity
            onPress={signOut}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      )
    }
    
    export default HomeScreen;
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    })