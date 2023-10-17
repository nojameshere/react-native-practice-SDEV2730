import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { createUser } from '../util/auth'; // Import createUser function from your utility file

export function Register({ setAuthPage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = async () => {
        try {
            const token = await createUser(email, password);
            console.log('Registration successful', token);
            
            Alert.alert('Successful Registration, Please sign in.');
            setAuthPage('login');
            
        } catch (error) {
            console.error('Error registering:', error);
            Alert.alert('An error has occured. Please try again.')
            
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleRegistration}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#F5C0C3',
        width: 200,
        height: 40,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#F59599',
        borderWidth: '1px',
        marginTop: 15
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '600'
    }
});

export default Register;
