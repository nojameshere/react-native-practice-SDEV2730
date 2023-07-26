import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useContext, useReducer } from 'react';
import { UserContext } from '../context/userContext';

// Reducer function to handle state updates
const reducer = (state, action) => {
  switch (action.type) {
    case 'updateEmail':
      return { ...state, email: action.payload };
      case 'updateError':
        return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default function Red({ setContent }) {
  const userContext = useContext(UserContext);

  const [state, dispatch] = useReducer(reducer, {
    email: '',
    error: false,
  });

  const handleNext = () => {
    if (state.email.indexOf('@') !== -1 && state.email.length > 1) {
      dispatch({ type: 'updateError', payload: false });
      userContext.updateEmail(state.email);
  
      // Change the content to validation
      setContent('validation');
    } else {
      dispatch({ type: 'updateError', payload: true });
    }
  };

  return (
    <View style={styles.background}>
      <Text style={styles.text}>Verify your email.</Text>
      <TextInput
        style={styles.inputText}
        placeholder='example@someurl.domain'
        onChangeText={(text) => dispatch({ type: 'updateEmail', payload: text })}
        keyboardType='email-address'
      ></TextInput>
      <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
      {state.error && <Text style={styles.error}>Fix Errors</Text>}
    </View>
  );
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
    },
    error: {
      textAlign: 'center',
      fontSize: 20,
      color: 'red',
      marginTop: 15
    }
})