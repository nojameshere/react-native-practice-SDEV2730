import React , { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function({ setGameOver, guesses, rndm }) {

    const resetGame = () => {
        setGameOver(false);
    }

    return(
        <View style={styles.gameOverBody}>
            <Text style={styles.bodyText}>The Game is Over</Text>
            <Text style={styles.bodyText}>Number of rounds: {guesses}</Text>
            <Text style={styles.bodyText}>Number was: {rndm}</Text>
            <TouchableOpacity style={styles.newGame} onPress={resetGame}>
                <Text style={styles.newGameText}>NEW GAME</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    gameOverBody: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25
    },
    bodyText: {
        fontSize: 16,
        textAlign: 'center',
    },
    newGame: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
        marginTop: 5
    },
    newGameText: {
        fontSize: 18,
        textAlign: 'center'
    }
})