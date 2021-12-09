import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
	try {
		const jsonValue = await AsyncStorage.getItem('userInfo');
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (e) {
		// error reading value
		console.log("there was an error = ", e)
	}
}

export default getData;