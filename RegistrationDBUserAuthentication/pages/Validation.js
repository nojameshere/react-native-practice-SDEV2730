import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useContext, useState } from 'react';
import axios from 'axios';

import { UserContext } from '../context/userContext';

export default function Validation({ setContent, setRegDone }) {
    const userContext = useContext(UserContext);

    const handleNext = async (isValid) => {
        setContent('main');
        setRegDone(true);
        if (isValid) {
            try {
                // Your Firestore REST API URL
                const firestoreUrl = `https://firestore.googleapis.com/v1/projects/practice-ec77a/databases/(default)/documents/Captured_Data`;

                // Data you want to push to Firestore
                const data = {
                    fields: {
                        firstName: { stringValue: userContext.firstName },
                        lastName: { stringValue: userContext.lastName },
                        phoneNumber: { stringValue: userContext.phoneNumber },
                        email: { stringValue: userContext.email },
                    },
                };

                // Make a POST request to push data to Firestore
                const response = await axios.post(firestoreUrl, data);

                console.log('Firestore response:', response.data);

                Alert.alert(
                    'Alert',
                    'Yay everything worked well!',
                    [{ text: 'OK' }]
                );
            } catch (error) {
                console.error('Error pushing data to Firestore:', error);

                Alert.alert(
                    'Error',
                    'Something went wrong while saving data!',
                    [{ text: 'OK' }]
                );
            }
        } else {
            Alert.alert(
                'Alert',
                'Okay, you can enter your info again',
                [{ text: 'OK' }]
            );
        }
    };

    return(
        <View style={styles.background}>
            <Text style={styles.text}>Using Reducer</Text>
            <Text></Text>
            <Text></Text>
            <Text style={styles.text}>First Name:  {userContext.firstName}</Text>
            <Text style={styles.text}>Last Name: {userContext.lastName}</Text>
            <Text style={styles.text}>Phone:  {userContext.phoneNumber}</Text>
            <Text>{/*This is just for spacing because I'm too lazy to add another View*/}</Text>
            <Text style={styles.text}>Is the above information correct?</Text>
            <View style={styles.buttonHolder}>
                <TouchableOpacity style={styles.nextButton} onPress={() => handleNext(true)}>
                    <Text style={styles.nextText}>YES</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={() => handleNext(false)}>
                    <Text style={styles.nextText}>NO</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'left',
        color: 'black',
        fontSize: 18,
        fontWeight: 800,
        paddingLeft: 60
    },
    nextButton: {
        alignSelf: 'center',
        width: 120,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'blue',
        marginTop: 15
    },
    nextText: {
        color: 'white',
        textAlign: 'center'
    },
    background: {
        height: '100%',
        backgroundColor: 'tan',
        display: 'flex',
        justifyContent: 'center'
    },
    buttonHolder: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})