import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../constants/colors';
import PlaceItem from './PlaceItem';

function PlacesList({ places, onDelete, setLoadedPlaces }) {
  console.log('PlacesList - Places:', places);
  const navigation = useNavigation();

  function selectPlaceHandler(id) {
    navigation.navigate('PlaceDetails', {
      placeId: id,
    });
  }

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <PlaceItem
          place={item}
          onSelect={selectPlaceHandler}
          setLoadedPlaces={setLoadedPlaces}
        />
      )}
    />
  );
  
}

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
