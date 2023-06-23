import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Button from './Button';

export default function Game({ setGuesses, setGameOver, rndm, setRndm, 
    guess, setGuess, guessCount, setGuessCount }) {


    const [guessHint, setGuessHint] = useState('');
    useEffect(() => {
        setGuesses([]);
    }, []); 
    
    useEffect(() => {
        setRndm(Math.floor(Math.random() * 100) + 1);
    }, []);

    const incrementGuessCount = () => {
        setGuessCount(guessCount + 1);
    }
    const appendGuesses = (newGuess) => {
        setGuesses(prevGuesses => [...prevGuesses, newGuess]);
      };

    const checkGuess = () => {
        if(parseInt(guess) == rndm){
            appendGuesses(guess);
            setGuess('');
            setGameOver(true);
            incrementGuessCount();
        }else if(parseInt(guess) < rndm){
            setGuessHint('Guess HIGHER');
            appendGuesses(guess);
            setGuess('');
            incrementGuessCount();
        }else if(parseInt(guess) > rndm){
            setGuessHint('Guess LOWER');
            appendGuesses(guess);
            setGuess('');
            incrementGuessCount();
        }
    }

    return(
        <View style={styles.gameView}>
            <Text style={styles.gameBody}>Enter your guesses here</Text>
            <TextInput
                style={styles.guessEntry}
                onChangeText={(text) => setGuess(text)}
                value={guess}
            />
            <Button buttonText={'CHECK MY GUESS'} passedFunction={checkGuess}/>
            <View style={styles.hintContainer}>
                <Text style={styles.hint}>{guessHint}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    gameView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25,
    },
    gameBody: {
        fontSize: 16,
    },
    guessEntry: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        height: 40,
        width: 200,
        textAlign: 'center',
        marginTop: 5,
    },
    hintContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        width: 200,
        height: 40,
        margin: 10,
        borderRadius: 10,
    },
    hint: {
        fontSize: 16,
        fontWeight: 700,
    }
})