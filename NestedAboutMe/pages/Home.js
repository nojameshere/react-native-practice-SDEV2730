import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

export default function School() {
    const [fontLoaded, setFontLoaded] = useState(false);

    const loadFont = async () => {
        await Font.loadAsync({
          'Dosis': require('../fonts/Dosis-VariableFont_wght.ttf'),
        });
        setFontLoaded(true);
      };
      
      useEffect(() => {
        loadFont();
      }, []);
      
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Home</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>James Sales</Text>
                <Text style={styles.subtext}>I am a student at Davis Technical College studying 
                Software Development. My goal is to become a full-stack developer</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        display: 'flex'
    },
    header:{
        backgroundColor: 'white',
        width: 430,
        height: 90,
        justifyContent: 'flex-end'
    },
    headerText:{
        fontSize: 24, 
        padding: 15, 
        fontWeight: 600
    },
    content:{
        flex: 1,
        alignItems: 'center',
    },
    title:{
        fontFamily: 'Dosis',
        fontSize: 30,
        marginTop: 35,
        marginBottom: 20
    },
    subtext:{
        fontFamily: 'Dosis',
        fontSize: 24,
        margin: 20
    }
})