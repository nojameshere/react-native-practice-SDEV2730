import {View, StyleSheet, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';

export default function Validation({setContent}) {
    const userContext = useContext(UserContext);


    const handleNext = (isValid) => {
        setContent('main');
        if (isValid) {
            Alert.alert(
                'Alert',
                'Yay everything worked well!',
                [{ text: 'OK' }]
            );
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
            <Text style={styles.text}>First Name:  {userContext.firstName}</Text>
            <Text style={styles.text}>Last Name: {userContext.lastName}</Text>
            <Text style={styles.text}>Phone:  {userContext.phoneNumber}</Text>
            <Text style={styles.text}>Email: {userContext.email}</Text>
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