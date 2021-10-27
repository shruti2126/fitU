import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';

const MainStack = createStackNavigator()

const MainNavigator: React.FC = () => {
    const {Navigator, Screen} = MainStack

    return (
        <Navigator >
            <Screen name="Login" component={LoginScreen} />
            <Screen name="Home" component={HomeScreen} />
            <Screen name="Register" component={RegisterScreen} />
        </Navigator>
    )
}

export default MainNavigator;