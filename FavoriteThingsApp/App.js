import React, { useState } from 'react';
import ItemCard from './components/ItemCard';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AddThing from './components/AddThing';

export default function App() {
  const [showAddFav, setShowAddFave] = useState(false);
  const [items, setItems] = useState([]);

  const handleSaveItem = (thing, item) => {
    const newItem = {
      id: Date.now().toString(),
      thing,
      item,
    };

    setItems((prevItems) => [...prevItems, newItem]);
    setShowAddFave(false);
  };

  const handleDeleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addFav} onPress={() => setShowAddFave(true)}>
        <View style={styles.addFavButton}>
          <Text style={styles.addFavText}>ADD NEW FAVORITE</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.favList}>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} onDeleteItem={handleDeleteItem} />
        ))}
      </View>
      {showAddFav && <AddThing setShowAddFave={setShowAddFave} onSaveItem={handleSaveItem} />}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  addFav: {

  },
  addFavButton: {
    display: 'flex',
    backgroundColor: '#0C8EFF',
    width: 350,
    height: 45,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addFavText: {
    color: 'white',
    fontSize: 20,
  }
});
