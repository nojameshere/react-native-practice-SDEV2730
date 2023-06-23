import { View, Text, StyleSheet } from 'react-native';
import Button from './Button'
import { AntDesign } from '@expo/vector-icons';

export default function({ setGameOver, rndm, guessCount, setGuessCount }) {

    const resetGame = () => {
        setGameOver(false);
        setGuessCount(0);
    }

    return(
        <View style={styles.gameOverBody}>
            <Text style={styles.bodyText}>You guessed the number!</Text>
            <AntDesign name="Trophy" size={60} color="black" />
            <Text style={styles.bodyText}>Number of rounds: {guessCount}</Text>
            <Text style={styles.bodyText}>Number was: {rndm}</Text>
            <Button buttonText={'NEW GAME'} passedFunction={resetGame} />

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