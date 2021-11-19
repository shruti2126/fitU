import React from 'react'
import { View, StyleSheet, Text, Pressable, Image, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import {getAuth} from 'firebase/auth'


// type StepProps = {
//     card_title?: string;
//     nav_function?: () => void;
// };
 
// const DATA = [
//     {
        
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: 'Goal 1',
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'Goal 2',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Goal 3',
//     },
//   ];

//   const Item = ({ title }) => (
//     <View>
//       <Text>{title}</Text>
//     </View>
//   );
  

// const StepCard: React.FC<StepProps> = ({ 
//     card_title,
// }) => {

//     const auth = getAuth()

//     const renderItem = ({ item }) => (
//         <Item title={item.title} />
//     );
    

//    // const image= require('../StepImg.gif');
    
//     return (
//         <View style={styles.container}>

//             <View style={styles.profile_header}>
//                 <Text style={styles.text_title}>
//                     Daily Average: 4,858 steps!
//                 </Text>
//                 <Text style={styles.image}>
//                     <Image source={require('../tree.jpeg')} />
//                 </Text>
//             </View>

           
//             <Text style={[
//                 styles.text_title,
//                 {
//                     marginTop: 5
//                 }
//             ]}>
               
//             </Text>
      

//         </View>
       
//     )
// }



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
    image: {
        flex: 1,
        justifyContent: "center",
        alignContent: 'center',
        width: '100%',
        height: '100%',
      }
})

export default function StepCard(props){
    return(
        <View style={styles.container}>
            {props.children}
            
        </View>
    )
}