import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';

export default function AddThing({ setShowAddFave, onSaveItem }) {
  const [thing, setThing] = useState('');
  const [item, setItem] = useState('');

  const cancelAddFav = () => {
    setShowAddFave(false);
  };

  const handleAddItem = () => {
    onSaveItem(thing, item);
    setShowAddFave(false);
  };

  return (
    <View style={styles.addThingContainer}>
      <TextInput
        style={styles.addThingText}
        id='favoriteThing'
        placeholder='Favorite Thing, ex Season'
        onChangeText={(text) => setThing(text)}
        value={thing}
      />
      <TextInput
        style={styles.addThingText}
        id='favoriteItem'
        placeholder='Favorite Item, ex Winter'
        onChangeText={(text) => setItem(text)}
        value={item}
      />
      <View style={styles.addThingButtonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={cancelAddFav}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    addThingContainer: {
        position: 'absolute',
        backgroundColor: 'white',
        left: '50%',
        top: '50%',
        transform: [
            { translateX: -500 },
            { translateY: -500 },
        ],
        width: 1000,
        height: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addThingText: {
        margin: 5,
        width: 350,
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: 10,
    },
    addThingButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
    },
    cancelButton: {
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 35,
        marginRight: 20,
    },
    addButton: {
        backgroundColor: 'green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 35,
    },
    buttonText: {
        color: 'white'
    }
})