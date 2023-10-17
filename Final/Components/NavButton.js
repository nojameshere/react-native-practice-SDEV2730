import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export function NavButton(props) {
    const { type, isSelected, onPress } = props;

    let iconColor = isSelected ? 'white' : 'black';

    switch (type) {
        case 'home':
            return (
                <TouchableOpacity style={[styles.navButtonContainer, isSelected && styles.selectedButton]} onPress={onPress}>
                    <Ionicons name="home" color={iconColor} size={50} />
                </TouchableOpacity>
            );
        case 'newEntry':
            return (
                <TouchableOpacity style={[styles.navButtonContainer, isSelected && styles.selectedButton]} onPress={onPress}>
                    <MaterialCommunityIcons name="bank-plus" color={iconColor} size={50} />
                </TouchableOpacity>
            );
        case 'transactions':
            return (
                <TouchableOpacity style={[styles.navButtonContainer, isSelected && styles.selectedButton]} onPress={onPress}>
                    <FontAwesome5 name="list-alt" color={iconColor} size={50} />
                </TouchableOpacity>
            );
        case 'profile':
            return (
                <TouchableOpacity style={[styles.navButtonContainer, isSelected && styles.selectedButton]} onPress={onPress}>
                    <Fontisto name="person" color={iconColor} size={50} />
                </TouchableOpacity>
            );
        default:
            return null;
    }
}

const styles = StyleSheet.create({
    navButtonContainer: {
        //maybe styles here?
    },
    selectedButton: {
        //Can't decide if I want any more effects on the button.
    },
});
