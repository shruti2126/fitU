import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CircleButton = (props) => {
	return (
		<TouchableOpacity
			style={{
				margin: props.margin,
				height: props.size,
				width: props.size,
				backgroundColor: props.color,
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: props.size * 2,
				marginBottom: 10
			}}
			onPress={props.onPress}
		>
			{/* <AntDesign name="pluscircleo" size={60} color="black" style={styles.plus} /> */}
			<AntDesign name="plus" size={50} color="white" />
			{/* <View style={styles.plusContainer}>
				<View style={styles.vertical} />
				<View style={styles.horizontal} />
			</View> */}
			{/* <Image source={props.source} /> */}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	plusContainer: {
		flex: 1
		// position: 'absolute'
	},
	vertical: {
		// flex: 1,
		marginTop: 5,
		marginLeft: 20,
		height: 50,
		width: 7,
		backgroundColor: 'white'
	},
	horizontal: {
		// flex: 1,
		// marginBottom: 20,
		// paddingTop: 20,
		height: 7,
		width: 50,
		backgroundColor: 'white'
	},
	plus: {
		marginBottom: 10
	}
});

export default CircleButton;

// export default function ExampleProgram() {
//   const showMessage = () => Alert.alert('Button clicked !');

//   return (
//     <View style={styles.container}>
//       <CircleButton
//         text="Btn-1"
//         size={150}
//         color="#7986cb"
//         textColor="white"
//         fontSize={20}
//         margin={10}
//         onPress={showMessage}
//       />
//       <CircleButton
//         text="Btn-2"
//         size={100}
//         color="#9c27b0"
//         textColor="white"
//         margin={10}
//         fontSize={20}
//       />
//       <CircleButton
//         text="Btn-3"
//         size={200}
//         color="#2196f3"
//         textColor="white"
//         margin={10}
//         fontSize={20}
//       />
//       <CircleButton
//         text="Btn-4"
//         size={80}
//         color="#00bcd4"
//         textColor="white"
//         margin={10}
//         fontSize={20}
//       />
//     </View>
//   );
// }
