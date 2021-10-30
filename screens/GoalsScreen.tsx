import React from 'react'
import { StyleSheet, Text, View, SectionList, Platform, Image } from "react-native";
import CircleButton from '../components/CircleButton';

const DATA = [
    {
      title: "Daily Steps Goal",
      data: ["Pizza"]
    },
    {
      title: "Daily Sleep Goal",
      data: ["French Fries"]
    },
  ];

  
const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );


const Goals = () => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={ ({ item }) => <Item title={item} /> }
                renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                )}
            />

            <View style={ styles.bottomView} >
               <CircleButton
                    text="Btn-4"
                    size={70}
                    color="#00bcd4"
                    textColor="white"
                    margin={10}
                    fontSize={20}
                    source={{uri: "./plus.png"}}
                    onPress={() => alert("add goal")}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
      marginHorizontal: 16,
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 24
    },
    bottomView:{
        width: '100%', 
        height: 50, 
        justifyContent: 'flex-end', 
        alignItems: 'center',
        bottom: 0
    },
});

export default Goals