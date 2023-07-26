import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import React, { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';

export default function Blue({setContent}) {
    const userContext = useContext(UserContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleNext = () => {
        //set first name and last name
        userContext.updateFirstName(firstName);
        userContext.updateLastName(lastName);
        //change the content to main
        setContent('main')
    }
    return(
        <View style={styles.background}>
            <Text style={styles.text}>Verify your first and last names.</Text>
            <TextInput style={styles.inputText} placeholder='First Name' onChangeText={(text) => setFirstName(text)}></TextInput>
            <TextInput style={styles.inputText} placeholder='Last Name' onChangeText={(text) => setLastName(text)}></TextInput>
            <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
                <Text style={styles.nextText}>
                    Next
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'blue',
        fontSize: 30,
        fontWeight: 700,
        marginTop: 30
    },
    inputText: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 30
    },
    nextButton: {
        alignSelf: 'center',
        width: 50,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'blue',
        marginTop: 15
    },
    nextText: {
        color: 'white'
    },
    background: {
        height: '100%',
        backgroundColor: 'lightblue',
        display: 'flex',
    }
})