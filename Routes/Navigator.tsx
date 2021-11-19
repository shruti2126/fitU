import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import Steps from '../Screens/Steps';
import Sleep from '../Screens/Sleep';
import Goals from '../Screens/GoalsScreen';

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
