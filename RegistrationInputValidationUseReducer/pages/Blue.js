import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import React, { useContext, useReducer } from 'react';
import { UserContext } from '../context/userContext';

export default function Blue({setContent}) {
    const userContext = useContext(UserContext);

    const reducer = (state, action) => {
        switch (action.type) {
          case 'updateFirstName':
            return { ...state, firstName: action.payload };
          case 'updateLastName':
            return { ...state, lastName: action.payload };
          default:
            return state;
        }
      };
    const [state, dispatch] = useReducer(reducer, {
        firstName: '',
        lastName: '',
    });
    const handleNext = () => {
        //set first name and last name
        userContext.updateFirstName(state.firstName);
        userContext.updateLastName(state.lastName);
        //change the content to main
        setContent('main')
    }
    return (
        <View style={styles.background}>
            <Text style={styles.text}>Using Reducer</Text>
            <Text></Text>
            <Text></Text>
          <Text style={styles.text}>Verify your first and last names.</Text>
          <TextInput
            style={styles.inputText}
            placeholder='First Name'
            onChangeText={(text) => dispatch({ type: 'updateFirstName', payload: text })}
          ></TextInput>
          <TextInput
            style={styles.inputText}
            placeholder='Last Name'
            onChangeText={(text) => dispatch({ type: 'updateLastName', payload: text })}
          ></TextInput>
          <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      );
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