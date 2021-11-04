import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getAuth } from 'firebase/auth';
import { NavigationRouteContext, useNavigation } from '@react-navigation/core';
import Card from '../components/Card';
import ProfileCard from '../components/ProfileCard';

type homeScreenProps = {
	navigation: any;
};

const HomeScreen: React.FC<homeScreenProps> = ({ navigation }) => {
	navigation = useNavigation();
	const auth = getAuth();
	const signOut = () => {
		auth.signOut().then(() => {
			navigation.replace('Login');
		});
	};

	console.log(auth);

	return (
		<ImageBackground source={require('../HomeScreenBackground.png')} style={styles.image}>
			<View style={styles.container}>
				<View style={styles.title_header}>
					<Text style={styles.title}>
						Welcome {auth.currentUser.displayName ? auth.currentUser.displayName : 'Couch Potato'}!
					</Text>
				</View>
				<ProfileCard goal_navigation={() => navigation.navigate('Goals')} />
				<View style={styles.sector_container}>
					<Card card_title={'Steps'} nav_function={() => navigation.navigate('Steps')} />
					<Card card_title={'Sleep'} nav_function={() => navigation.navigate('Sleep')} />
				</View>
				<TouchableOpacity onPress={signOut} style={styles.button}>
					<Text style={styles.buttonText}>Sign out</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	);

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
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		// backgroundColor: '#FFFFFF'
		// backgroundColor: 'aliceblue'
	},
	sector_container: {},
	title: {
		color: 'white',
		fontWeight: '700',
		fontSize: 30
	},
	title_header: {
		textAlign: 'center',
		marginTop: 25,
	},
	row: {
		flex: 1,
		justifyContent: 'space-between',
		// alignItems: 'center',
		alignContent: 'space-between',
		flexDirection: 'row',
		// backgroundColor: '#FFFFFF'
		// backgroundColor: 'aliceblue'
	},
	button: {
		backgroundColor: '#0782F9',
		width: '60%',
		padding: 15,
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
		height: '100%',
		blurRadius: 50
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
