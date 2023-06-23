import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Game from './components/Game';
import GameOver from './components/GameOver';

export default function App() {

  const [gameOver, setGameOver] = useState(false);
  const [guesses, setGuesses] = useState(0);
  const [rndm, setRndm] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>James Sales</Text>
      <Text style={styles.bodyText}>I am thinking of a number between 1 and 100</Text>
      <Text style={styles.bodyText}>Take a guess</Text>
      {!gameOver && <Game setGuesses={setGuesses} setGameOver={setGameOver} guesses={guesses} rndm={rndm} setRndm={setRndm}/>}
      {gameOver && <GameOver setGameOver={setGameOver} guesses={guesses} rndm={rndm} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 600
  },
  bodyText: {
    fontSize: 16
  }
});
