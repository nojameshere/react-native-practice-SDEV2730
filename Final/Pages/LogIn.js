import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { login } from '../util/auth'; 
import MyContext from '../Context/Context'; 

export function LogIn({ setAuthPage, setPage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { dispatch } = useContext(MyContext); 

    const handleLogin = async () => {
        try {
            const token = await login(email, password);
            console.log('Logged in successfully', token);

            // Dispatch action to set user ID and authentication status
            dispatch({ type: 'SET_USERNAME', payload: email });
            dispatch({ type: 'SET_AUTHENTICATED', payload: true });
            setPage('profile')
            
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    const handlePageSwap = () => {
        setAuthPage('register');
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
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
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePageSwap}>
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
    inputContainer: {
        width: '100%',
        marginBottom: 20,
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

export default LogIn;
