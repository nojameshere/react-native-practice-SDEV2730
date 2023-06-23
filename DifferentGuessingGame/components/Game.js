import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function Game({ setGuesses, setGameOver, guesses, rndm, setRndm }) {

    const [ guess, setGuess ] = useState('');
    const [guessHint, setGuessHint] = useState('');
    useEffect(() => {
        setGuesses(0);
    }, []); 
    
    useEffect(() => {
        setRndm(Math.floor(Math.random() * 100) + 1);
    }, []);

    const incrementGuesses = () => {
        setGuesses(guesses + 1);
    }

    const checkGuess = () => {
        if(parseInt(guess) == rndm){
            incrementGuesses();
            setGameOver(true);
        }else if(parseInt(guess) < rndm){
            setGuessHint('Guess higher...');
            incrementGuesses();
            setGuess('');
        }else if(parseInt(guess) > rndm){
            setGuessHint('Guess lower...');
            incrementGuesses();
            setGuess('');
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
            <TouchableOpacity style={styles.guessButton} onPress={checkGuess}>
                <Text style={styles.guessButtonText}>CHECK MY GUESS</Text>
            </TouchableOpacity>
            <Text style={styles.gameBody}>{guessHint}</Text>
            <Text style={styles.gameBody}>You've guessed {guesses} times</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    gameView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25
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
        marginTop: 5
    },
    guessButton: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
        width: 200,
        marginTop: 5
    },
    guessButtonText: {
        fontSize: 18,
    }
})