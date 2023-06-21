import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

export default function CourseCard({item}) {

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
    <View key={item.id} style={styles.courseCard}>
        <Text style={styles.course}>{item.course}</Text>
        <Text style={styles.description}>{item.description}</Text>
    </View>
    )
}


const styles = StyleSheet.create({
    courseCard: {
        padding: 5,
        backgroundColor: 'lightgray',
        margin: 10,
        borderRadius: 10,
      },
      course: {
        fontFamily: 'Dosis',
        fontSize: 20,
        fontWeight: 700,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
    },
    description: {
        fontFamily: 'RobotoSlab',
        fontSize: 16,
        marginRight: 20,
    },
})