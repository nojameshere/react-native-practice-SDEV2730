import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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

    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'MySql', 'node.js', 'C#', 'React Native'];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Skills</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>My Skills</Text>
                <ScrollView>
                    {skills.map((skill, index) => (
                        <Text key={index} style={styles.skillItem}>
                            {'\u2022'} {skill}
                        </Text>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex'
    },
    header: {
        backgroundColor: 'white',
        width: 430,
        height: 90,
        justifyContent: 'flex-end'
    },
    headerText: {
        fontSize: 24,
        padding: 15,
        fontWeight: 600
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Dosis',
        fontSize: 30,
        marginTop: 35,
        marginBottom: 20
    },
    skillItem: {
        fontFamily: 'Dosis',
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 10
    }
})