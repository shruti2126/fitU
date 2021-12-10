import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { doc, collection, setDoc, getDoc } from "firebase/firestore";
import getFirestore from "../config/config";


const db = getFirestore;

const fetchUsername = async (email: string) => {

    console.log(email)
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.get("username");
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return null
    }

};

export default fetchUsername;

const styles = StyleSheet.create({})
