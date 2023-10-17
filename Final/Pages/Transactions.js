import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { TransactionCard } from '../Components/TransactionCard';
import MyContext from '../Context/Context';
export function Transactions() {
    const { state, dispatch } = useContext(MyContext);
    const [recentTransactions, setRecentTransactions] = useState([]);

    const firestoreUrl = `https://firestore.googleapis.com/v1/projects/practice-ec77a/databases/(default)/documents/Transactions`;

    useEffect(() => {
        Axios.get(firestoreUrl)
            .then(response => {
                const transactions = response.data.documents.map(doc => doc.fields);
    
                // Filter transactions based on user's email
                const userTransactions = transactions.filter(transaction => {
                    const email = transaction.userEmail?.stringValue; // Check if 'email' property exists
                    return email === state.userEmail; // Replace with the actual property name that holds the email
                });
    
                userTransactions.sort((a, b) => {
                    const timeA = new Date(a.transactionTime?.stringValue); 
                    const timeB = new Date(b.transactionTime?.stringValue); 
                    return timeB - timeA;
                });
                
                setRecentTransactions(userTransactions);
            })
            .catch(error => {
                console.error('Error fetching transactions:', error);
            });
    }, []);
    

    return (
        <View style={styles.transactionContainer}>
            <Text style={styles.header}>Transactions</Text>
            <FlatList
                style={styles.transactionListContainer}
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
    transactionContainer: {
        flex: 1,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 60,
        fontWeight: '300',
        paddingBottom: 15,
        marginTop: 40
    },
    transactionListContainer: {
        backgroundColor: 'white',
        width: '90%',
        height: '75%',
        padding: 20,
        borderRadius: 10
    }
})