import {View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import React, { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';

export default function Red({setContent}) {
    const userContext = useContext(UserContext);

    const [phone, setPhone] = useState('')

    const handleNext = () => {
        //set email
        userContext.updatePhoneNumber(phone);
        setContent('validation');
    }
    return(
        <View style={styles.background}>
            <Text style={styles.text}>Verify your email.</Text>
            <TextInput style={styles.inputText} placeholder='example@someurl.domain' onChangeText={(text) => setPhone(text)}></TextInput>
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
        color: 'red',
        fontSize: 30,
        fontWeight: 700,
        marginTop: 30
    },
    background: {
        height: '100%',
        backgroundColor: '#E5ADAE',
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