import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export function TransactionCard(props) {
    const transColor = props.amount <= 0 ? 'red' : 'green';

    return (
        <View style={styles.container}>
            <MaterialIcons name="attach-money" size={70} color={transColor} />
            <Text style={styles.cardtext}>{props.amount}</Text>
            <View style={styles.memoContainer}>
                <Text style={styles.memo}>{props.memo}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E4E2',
        height: 80,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    cardtext: {
        fontSize: 35,
        fontWeight: '600',
        paddingRight: 10,
    },
    memoContainer: {
        overflow: 'wrap',
        flex: 1,
    },
});
