import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Goal } from "../types/GoalTypes"
import { getAuth } from '@firebase/auth';
import getFirestore from "../config/config";
import { doc, getDoc } from '@firebase/firestore';

const db = getFirestore;

let auth = getAuth();

const fetchRewards = async (email: String) => {

    const docRef = doc(db, "rewards", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        //console.log(docSnap.data())
        return docSnap.data();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return null
    }
}

export default fetchRewards;

const styles = StyleSheet.create({})
