import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

export default function School({setSelected}) {
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
      
    const changePage = (newPage) =>{
        setSelected(newPage)
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>School</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Davis Technical College</Text>
                <Image source={require('../assets/dtc.jpg')} style={styles.image}/>
                <Text style={styles.subtext}>550 East 300 South, Kaysville Utah, 84037</Text>
                <Text style={styles.subtext}>801 - 593 - 2500</Text>
                <TouchableOpacity style={styles.courses} onPress={() => changePage('list')} >
                    <Text style={styles.buttonLight}>Courses Taken</Text>
                </TouchableOpacity>
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
        width: '100%',
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
    image:{
        width: 430,
        resizeMode: 'contain'
    },
    subtext:{
        fontFamily: 'Dosis',
        fontSize: 20
    },
    courses:{
        backgroundColor: 'teal',
        padding: 10,
        borderRadius: 10,
        marginTop: 20
    },
    buttonLight: {
        color: 'white'
    }
})