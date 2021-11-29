import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Steps from '../screens/Steps';
import Sleep from '../screens/Sleep';
import Goals from '../screens/GoalsScreen';

const MainStack = createStackNavigator();

const MainNavigator: React.FC = () => {
	const { Navigator, Screen } = MainStack;

	return (
		<Navigator>
			<Screen name="Login" component={LoginScreen} />
			<Screen name="Home" component={HomeScreen} />
			<Screen name="Register" component={RegisterScreen} />
			<Screen name="Steps" component={Steps} />
			<Screen name="Sleep" component={Sleep} />
			<Screen name="Goals" component={Goals} />
		</Navigator>
	);
};

export default MainNavigator;
