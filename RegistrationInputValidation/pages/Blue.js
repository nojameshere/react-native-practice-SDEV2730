import {View, StyleSheet, Text, Image} from 'react-native';
import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';

export default function Blue() {
    const userDetails = useContext(UserContext);

    return(
        <View style={styles.background}>
            <Text style={styles.text}>Verify your first and last names.</Text>
            <Text style={styles.text}>{userDetails.firstName} {userDetails.lastName}</Text>
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
    background: {
        height: '100%',
        backgroundColor: 'lightblue',
        display: 'flex',
    }
})