import {View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import React, { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';

export default function Green({setContent}) {
    const userContext = useContext(UserContext);
    const [email, setEmail] = useState('');

    const handleNext = () => {
        //set phone number
        userContext.updateEmail(email);
        //change the content to main
        setContent('main')
    }
    return(
        <View style={styles.background}>
            <Text style={styles.text}>Verify your phone.</Text>
            <TextInput style={styles.inputText} placeholder='801-555-5555' onChangeText={(text) => setEmail(text)}></TextInput>
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
        color: 'green',
        fontSize: 30,
        fontWeight: 700,
        marginTop: 30
    },
    background: {
        height: '100%',
        backgroundColor: 'lightgreen',
        display: 'flex',
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
    }
})