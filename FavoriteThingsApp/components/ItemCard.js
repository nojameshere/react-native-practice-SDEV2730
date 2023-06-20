import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from  'react-native';

export default function ItemCard({onDeleteItem, item}){
    
    const handleDeleteItem = () => {
        onDeleteItem(item.id);
    }

    return (
        <TouchableOpacity onPress={handleDeleteItem}>
            <View style={styles.itemCard}>
                <Text style={styles.itemCardText}>Favorite {item.thing}</Text>
                <Text style={styles.itemCardText}>{item.item}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemCard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 350,
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#c1edff',
        marginTop: 20,
        padding: 10,
    },
    itemCardText: {
        width: 170
    }
})