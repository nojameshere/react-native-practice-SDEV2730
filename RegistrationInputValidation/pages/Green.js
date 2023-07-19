import {View, StyleSheet, Text, Image} from 'react-native';
import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';

export default function Green() {
    const userDetails = useContext(UserContext);

    return(
        <View style={styles.background}>
            <Text style={styles.text}>Verify your phone.</Text>
            <Text style={styles.text}>{userDetails.phone}</Text>
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
    }
})