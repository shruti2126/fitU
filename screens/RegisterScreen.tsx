import React, {useState, useEffect} from 'react'
import { ImageBackground,KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigation } from '@react-navigation/core';


type registerScreenProps = {
    navigation: any;
};

const RegisterScreen: React.FC<registerScreenProps> = ({ navigation }) => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
  
    navigation = useNavigation()
    const auth = getAuth();

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('Registered and logged in with: ', user.email)
            navigation.navigate("Home")
            setEmail("");
            setPassword("");
            setUsername("");
        })
        .catch((error) => {
            alert(error.message)
        });
    };
    const image = {uri: "https://i.stack.imgur.com/cEz3G.jpg"};
    return (
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Username"
                onChangeText={setUsername}
                value={username}
                style={styles.input} />

                <TextInput 
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
                style={styles.input} />

                <TextInput 
                placeholder="Password"     
                value={password}
                onChangeText={setPassword}           
                style={styles.input}
                secureTextEntry={true} />
            </View>
            <View>
                <TouchableOpacity onPress={signUp}
                style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
        </ImageBackground>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
    text: {
      marginTop : 10
    },
    titleContainer : {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
      marginBottom: 25
    },
    heading: {
      fontSize: 100,
      color: "#702963"
    },
    image: {
      flex: 1,
      justifyContent: "center",
      alignContent: 'center',
      width: '100%',
      height: '100%',
    }
  })

  
