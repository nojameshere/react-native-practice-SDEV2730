import React, { useReducer, useState, useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import MyContext from '../Context/Context';

export function AddTransaction() {
    const { state, dispatch } = useContext(MyContext);
    const [amount, setAmount] = useState('');
    const [memo, setMemo] = useState('');

    const handleAmountChange = (text) => {
        const value = text.startsWith('$') ? text.substring(2) : text;
        setAmount(value);
    };

    const [selectedButton, setSelectedButton] = useState(null);

    const handleDebit = () => {
        setSelectedButton(selectedButton === 'DEBIT' ? null : 'DEBIT');
        // Apply a negative sign to the amount when debiting
        setAmount(amount.startsWith('-') ? amount : '-' + amount);
    };

    const handleCredit = () => {
        setSelectedButton(selectedButton === 'CREDIT' ? null : 'CREDIT');
        // Remove any existing negative sign from the amount when crediting
        setAmount(amount.startsWith('-') ? amount.substring(1) : amount);
    };


    const handleMemoChange = (text) => {
        setMemo(text);
    };

    const handleSubmit = async () => {
        try {
            const firestoreUrl = `https://firestore.googleapis.com/v1/projects/practice-ec77a/databases/(default)/documents/Transactions`;
    
            const data = {
                fields: {
                    transactionTime: { stringValue: new Date().toISOString() },
                    userEmail: { stringValue: state.userEmail }, // Make sure you have 'state.email' defined somewhere
                    amount: { doubleValue: parseFloat(amount) }, // Convert amount to a floating-point number
                    memo: { stringValue: memo },
                },
            };
    
            const response = await axios.post(firestoreUrl, data);
    
            console.log('Firestore response:', response.data);

            const numericAmount = parseFloat(amount);

        // Update the balance in the global context
        dispatch({ type: 'SET_BALANCE', payload: state.balance + numericAmount });

    
            // Clear input fields after successful submission
            setAmount('');
            setMemo('');
    
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
    };

    return (
        <View style={styles.container}>
            <View style={styles.transactionForm}>
                <TextInput
                    style={styles.transactionFormText}
                    placeholder='$ 0'
                    value={'$ ' + amount}
                    onChangeText={handleAmountChange}
                />
            </View>
            <View style={styles.topButtons}>
                <TouchableOpacity
                    style={[
                        styles.transTypeButton,
                        selectedButton === 'DEBIT' ? styles.selectedDebit : null
                    ]}
                    onPress={handleDebit}
                >
                    <MaterialIcons name="money-off" size={40} color="red" />
                    <Text style={styles.debitText}>Debit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.transTypeButton,
                        selectedButton === 'CREDIT' ? styles.selectedCredit : null
                    ]}
                    onPress={handleCredit}
                >
                    <MaterialIcons name="attach-money" size={40} color="green" />
                    <Text style={styles.creditText}>Credit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.transactionForm}>
                <TextInput
                    style={styles.transactionFormText}
                    placeholder='Transaction Memo'
                    value={memo}
                    onChangeText={handleMemoChange}
                />
            </View>
            <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topButtons: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    transTypeButton: {
        height: 90,
        aspectRatio: 1,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    debitText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'red'
    },
    creditText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'green'
    },
    transactionFormText: {
        height: 30,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 5,
        fontSize: 20,
        minWidth: 200   
    },
    submit: {
        backgroundColor: '#F5C0C3',
        width: 200,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#F59599',
        borderWidth: '1px',
        marginTop: 15
    },
    buttonText: {
        fontSize: 25
    },
    selectedDebit: {
        borderColor: 'red',
        borderWidth: 2
    },
    selectedCredit: {
        borderColor: 'green',
        borderWidth: 2
    }
})