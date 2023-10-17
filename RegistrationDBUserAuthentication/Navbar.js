import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Navbar({content, setContent}) {


    const renderNavbar = () => {
        if (content === 'name'){
            return(
                <View style={styles.navContent}>
                <TouchableOpacity onPress={() => setContent('main')}>
                <AntDesign name="arrowleft" size={24} color="purple" marginRight={50}/>
                </TouchableOpacity>
                <Text style={styles.navText}>Name</Text>
            </View>
            );
        }
        else if (content === 'phone'){
            return(
                <View style={styles.navContent}>
                <TouchableOpacity onPress={() => setContent('name')}>
                <AntDesign name="arrowleft" size={24} color="purple" marginRight={50}/>
                </TouchableOpacity>
                <Text style={styles.navText}>Phone</Text>
            </View>
            )
        }
        else if (content === 'email'){
            return(
                <View style={styles.navContent}>
                <TouchableOpacity onPress={() => setContent('phone')}>
                <AntDesign name="arrowleft" size={24} color="purple" marginRight={50}/>
                </TouchableOpacity>
                <Text style={styles.navText}>Email</Text>
            </View>
            )
        }
        else if (content === 'validation'){
            return(
                <View style={styles.navContent}>
                <TouchableOpacity onPress={() => setContent('email')}>
                <AntDesign name="arrowleft" size={24} color="purple" marginRight={50}/>
                </TouchableOpacity>
                <Text style={styles.navText}>Validation</Text>
            </View>
            )
        }
        else {
            return(
            <View>
                <Text style={styles.navText}>Registration</Text>
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