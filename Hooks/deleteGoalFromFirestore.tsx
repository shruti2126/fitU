import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { doc, deleteDoc } from "firebase/firestore";
import db from "../App";
import { Goal } from "../types/GoalTypes"
import { getAuth } from '@firebase/auth';

let auth = getAuth();
export default async function deleteGoalFromFirestore(goal: Goal) {

    if (goal.goalIsSteps) {
        await deleteDoc(doc(db, "steps_goals", auth.currentUser?.email));
    } else {
        await deleteDoc(doc(db, "sleep_goals", auth.currentUser?.email));
    }

}

const styles = StyleSheet.create({})

