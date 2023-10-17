import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavButton } from './NavButton';

export function Navbar({setPage}) {
    const [selectedButton, setSelectedButton] = useState('home');

    const handleButtonPress = (buttonType) => {
        setSelectedButton(buttonType);
        setPage(buttonType);
        console.log(buttonType);
    };

    return (
        <View style={styles.navContainer}>
            <NavButton
                type='home'
                onPress={() => handleButtonPress('home')}
                isSelected={selectedButton === 'home'}
            />
            <NavButton
                type='newEntry'
                onPress={() => handleButtonPress('newEntry')}
                isSelected={selectedButton === 'newEntry'}
            />
            <NavButton
                type='transactions'
                onPress={() => handleButtonPress('transactions')}
                isSelected={selectedButton === 'transactions'}
            />
            <NavButton
                type='profile'
                onPress={() => handleButtonPress('profile')}
                isSelected={selectedButton === 'profile'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    navContainer: {
        height: 100,
        width: '100%',
        backgroundColor: '#A5B4FA',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderTopWidth: 1,
        borderColor: 'lightgray',
    },
});
