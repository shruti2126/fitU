import React, { useState } from 'react'
import { StyleSheet, Text, View, SectionList, Platform, Image, Modal, Alert, Pressable } from "react-native";
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
  const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        presentationStyle={'fullScreen'}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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
                    onPress={() => setModalVisible(!modalVisible)}
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

    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
});

export default Goals