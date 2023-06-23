import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Game from './components/Game';
import GameOver from './components/GameOver';
import * as Font from 'expo-font';
import GuessList from './components/GuessList';

export default function App() {

  const [gameOver, setGameOver] = useState(false);
  const [guesses, setGuesses] = useState([]);
  const [rndm, setRndm] = useState(0);
  const [ guess, setGuess ] = useState('');
  const [guessCount, setGuessCount] = useState(0);

  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFont = async () => {
      await Font.loadAsync({
        'Dosis': require('./fonts/Dosis-VariableFont_wght.ttf'),
        'RobotoSlab': require('./fonts/RobotoSlab-VariableFont_wght.ttf')
      });
      setFontLoaded(true);
    };
    
    useEffect(() => {
      loadFont();
    }, []);




  return (
    <View style={styles.container}>
      <Text style={styles.header}>James Sales</Text>
      <Text style={styles.header}>Guess the number between 1 and 100</Text>
      
      {!gameOver && <Game setGuesses={setGuesses} 
      setGameOver={setGameOver} 
      rndm={rndm} 
      setRndm={setRndm}
      guess={guess}
      setGuess={setGuess}
      guessCount={guessCount}
      setGuessCount={setGuessCount}
      />}
      {gameOver && <GameOver 
      setGameOver={setGameOver} 
      guesses={guesses} 
      rndm={rndm} 
      setGuess={setGuess} 
      guessCount={guessCount}
      setGuessCount={setGuessCount}
      />}
      <Text style={styles.pastGuesses}>Past Guesses</Text>
      <GuessList guesses={guesses}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefefe',
    marginTop: 300,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 600,
    fontFamily: 'RobotoSlab'
  },
  bodyText: {
    fontSize: 16
  },
  pastGuesses: {
    fontSize: 16,
    fontWeight: 700
  },
  guessList: {
    flexDirection: 'column-reverse'
  }
});
