import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import * as Font from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import CourseCard from '../CourseCard';

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
    const renderItem = ({ item }) => {
        return (
            <CourseCard item={item} />
        )
    }

    const changePage = (school) =>{
        setSelected(school)
    }

    const classes = [
        {
            'id': 1,
            'course': 'SDEV 2110 - Javascript Programming I',
            'description': 'Basics of web development in Javascript'
        },
        {
            'id': 2,
            'course': 'SDEV 2410 - C# Programming I',
            'description': 'Introduction to C# and Visual Studio'
        },
        {
            'id': 3,
            'course': 'SDEV 1060 - Unit Testing',
            'description': 'Creating and running unit tests within Visual Studio'
        },
        {
            'id': 4,
            'course': 'SDEV 2420 - C# Programming II',
            'description': 'More in-depth C# with classes and inheritance'
        },
        {
            'id': 5,
            'course': 'SDEV 1040 - Database Development Fundamentals',
            'description': 'Creating and manipulating MySQL databases'
        },
        {
            'id': 6,
            'course': 'SDEV 2611 - Web API Fundamentals',
            'description': 'Creating and exporing APIs using .NET Core 2'
        },
        {
            'id': 7,
            'course': 'SDEV 2990 - Special Project - React',
            'description': 'A course working through the React JS framework'
        }
    ]


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => changePage('school')}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Course List</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.cardHeader}>Course Listing</Text>
                <FlatList style={styles.cardContainer}
                    data={classes}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
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
        flexDirection: 'row',
        width: 430,
        height: 90,
        alignItems: 'flex-end',
        padding: 15
    },
    headerText: {
        fontSize: 24,
        fontWeight: 600,
        marginLeft: 20
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
    subtext: {
        fontFamily: 'Dosis',
        fontSize: 24,
        margin: 20
    },
    cardContainer: {
        flex: 3,
        marginBottom: 30,
    },
    cardHeader: {
        marginBottom: 20,
        fontSize: 36,
        fontWeight: 800,
        marginTop: 60,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginTop: 10
    }
})