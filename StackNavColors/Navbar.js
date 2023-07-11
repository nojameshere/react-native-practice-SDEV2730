import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Navbar({content, setContent}) {


    const renderNavbar = () => {
        if (content === 'blue'){
            return(
                <View style={styles.navContent}>
                <TouchableOpacity onPress={() => setContent('main')}>
                <AntDesign name="arrowleft" size={24} color="purple" marginRight={50}/>
                </TouchableOpacity>
                <Text style={styles.navText}>Blue</Text>
            </View>
            );
        }
        else if (content === 'red'){
            return(
                <View style={styles.navContent}>
                <TouchableOpacity onPress={() => setContent('main')}>
                <AntDesign name="arrowleft" size={24} color="purple" marginRight={50}/>
                </TouchableOpacity>
                <Text style={styles.navText}>Red</Text>
            </View>
            )
        }
        else if (content === 'green'){
            return(
                <View style={styles.navContent}>
                <TouchableOpacity onPress={() => setContent('main')}>
                <AntDesign name="arrowleft" size={24} color="purple" marginRight={50}/>
                </TouchableOpacity>
                <Text style={styles.navText}>Green</Text>
            </View>
            )
        }
        else {
            return(
            <View>
                <Text style={styles.navText}>Home</Text>
            </View>
            )
        }
    }

    return (
        <View style={styles.container}>
            {renderNavbar()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 10,
    },
    navText: {
        fontSize: 26,
        fontWeight: 600,
        color: 'purple',
        marginLeft: 10
    },
    navContent: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})