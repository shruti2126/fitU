import React from 'react'
import { View, StyleSheet, Text, Pressable, Image, FlatList } from 'react-native'
import {getAuth} from 'firebase/auth'


type homeScreenProps = {
    card_title?: string;
};

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const Item = ({ title }) => (
    <View>
      <Text>{title}</Text>
    </View>
  );

const ProfileCard: React.FC<homeScreenProps> = ({ 
    card_title,
}) => {

    const auth = getAuth()

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <View style={styles.container}>

            <View style={styles.profile_header}>
                <Text style={styles.text_title}>
                    Welcome {auth.currentUser.displayName ? auth.currentUser.displayName: 'User'}!
                </Text>
            </View>

            <View> 
                <Text style={styles.text_title}>Today's Progress</Text>
                <Text style={styles.text_body}>Steps Walked: </Text>
                <Text style={styles.text_body}>Hours Slept Last night: </Text>
            </View>

            <Text style={[
                styles.text_title,
                {
                    marginTop: 5
                }
            ]}>
                Daily Goals
            </Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            <Pressable 
                style={styles.text_body}
                onPress={() => alert("see more goals")}
            > 
                See more/Add Goals
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        backgroundColor: "#E8E8E8",
        borderRadius: 10,
        height: 300,
        width: 350,
        margin: 10,
        paddingLeft: 15,
        paddingTop: 5
    },
    profile_header: {
        textAlign: "center",
        marginBottom: 20
    },
    header: {},
    body: {
        marginTop: 7
    },
    text_title: {
        color: "#1F283A",
        fontWeight: "700",
        fontSize: 25,
        // paddingLeft: 15
    },
    text_body: {
        marginBottom: 2
    },
})

export default ProfileCard
