
import { StyleSheet } from 'react-native'
import { doc, collection, setDoc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { goalData, Goal } from "../types/GoalTypes"
import { getAuth } from '@firebase/auth';
import getFirestore from "../config/config";

const db = getFirestore;

let auth = getAuth();


export default async function saveGoalsToFirestore(goal: Goal) {
    // let MainGoal: Goal = {}
    // let OtherGoals: Goal[] = []

    var docName: String = ""
    if (goal.goalIsSteps) {
        docName = "steps_goals"
    } else {
        docName = "sleep_goals"

    }
    const docRef = doc(db, docName, auth.currentUser?.email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        if (goal.isMainGoal) {
            await updateDoc(docRef, {
                MainGoal: goal
            })
        } else {
            await updateDoc(docRef, {
                goals: arrayUnion(goal)
            })
        }

    } else {
        if (goal.isMainGoal) {
            await setDoc(docRef, {
                MainGoal: goal
            })
        } else {
            await setDoc(docRef, {
                goals: goal
            })
        }
    }

}

const styles = StyleSheet.create({})

