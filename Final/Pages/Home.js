import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native'; // Import FlatList
import Axios from 'axios';
import MyContext from '../Context/Context';
import { TransactionCard } from '../Components/TransactionCard';

export function Home() {
    const [balance, setBalance] = useState(0);
    const textColor = balance >= 0 ? 'green' : 'red';
    const { state, dispatch } = useContext(MyContext);
    const [recentTransactions, setRecentTransactions] = useState([]);

    const firestoreUrl = `https://firestore.googleapis.com/v1/projects/practice-ec77a/databases/(default)/documents/Transactions`;

  
    useEffect(() => {
        Axios.get(firestoreUrl)
            .then(response => {
                const transactions = response.data.documents.map(doc => doc.fields);
    
                // Filter transactions based on user's email
                const userTransactions = transactions.filter(transaction => {
                    const email = transaction.userEmail?.stringValue;
                    return email === state.userEmail;
                });
    
                userTransactions.sort((a, b) => {
                    const timeA = new Date(a.transactionTime?.stringValue);
                    const timeB = new Date(b.transactionTime?.stringValue);
                    return timeB - timeA;
                });
    
                setRecentTransactions(userTransactions.slice(0, 7));
    
                // Calculate balance
                const calculatedBalance = userTransactions.reduce((total, transaction) => {
                    return total + transaction.amount.doubleValue;
                }, 0);
    
                const formattedBalance = calculatedBalance.toFixed(2);

                setBalance(formattedBalance);
            })
            .catch(error => {
                console.error('Error fetching transactions:', error);
            });
    }, []);
    

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Current Balance</Text>
            <View style={styles.balanceContainer}>
                <Text style={[styles.balance, { color: textColor }]}>${balance}</Text>
            </View>
            <Text style={styles.secondary}>Recent Transactions</Text>
            <FlatList
                style={styles.recentTransactions}
                data={recentTransactions}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TransactionCard
                        amount={item.amount.doubleValue}
                        memo={item.memo.stringValue}
                    />
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    balance: {
        fontSize: 80,
        fontWeight: '700'
    },
    balanceContainer: {
        justifyContent: 'center',
        margin: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '90%'
    },
    header: {
        fontSize: 50,
        fontWeight: '700'
    },
    secondary: {
        fontSize: 40,
        fontWeight: '500',
        paddingBottom: 15
    },
    recentTransactions: {
        backgroundColor: 'white',
        width: '90%',
        maxHeight: '50%',
        padding: 20,
        borderRadius: 10
    }
})