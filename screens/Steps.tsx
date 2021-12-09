import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import StepCard from "../components/StepCard"
import StepFacts from '../components/StepFacts'
import StepDataCard from '../components/StepDataCard';


const Steps = () => {
  return (

    <ImageBackground source={require('../nature.jpg')} style={styles.image}>
      <View style={styles.container}>
        {/* <AnimatedBar 
				    progress={30}
					height={50}
					borderColor="#DDD"
					fillColor="tomato"
					barColor="red"
					borderRadius={5}/> */}

        <StepDataCard />
        <StepCard />
        <StepFacts />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%'
    //blurRadius: 50
  }
});

export default Steps;
