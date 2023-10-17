import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LogIn } from './Pages/LogIn';
import { Register } from './Pages/Register';
import { Ionicons } from '@expo/vector-icons';


export function Auth({ setPage }) {
    const [authPage, setAuthPage] = useState('login');
    const handleBackButton = () => {
        if (authPage === 'register') {
          setAuthPage('login');
        } else {
          setPage('profile');
        }
      };
      

    const renderPage = () => {
        switch (authPage) {
            case 'login':
                return <LogIn setAuthPage={setAuthPage} setPage={setPage} />;
            case 'register':
                return <Register setAuthPage={setAuthPage} />;

        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={handleBackButton}>
                    <Ionicons name="arrow-back-circle" size={40} color="black" />
                </TouchableOpacity>
                {authPage == 'login' && <Text style={styles.navText}>Log In</Text>}
                {authPage == 'register' && <Text style={styles.navText}>Register</Text>}
                <Text></Text>
            </View>
            <View style={styles.pageContainer}>
                {renderPage()}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navbar: {
        height: 120,
        backgroundColor: '#A5B4FA',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 40,
        paddingRight: 80,
        paddingTop: 50
    },
    navText: {
        fontSize: 30
    },
    pageContainer: {
        flex: 1
    }
})