import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import MyContext from '../Context/Context';

export function Map({ setPage }) {
  const { state, dispatch } = useContext(MyContext);
  const initialLocation = {
    latitude: 41.029216,
    longitude: -111.9250044,
  };

  const [selectedLocation, setSelectedLocation] = useState(
    state.selectedLocation ? { ...state.selectedLocation } : null
  );

  useEffect(() => {
    if (state.selectedLocation) {
      setSelectedLocation({ ...state.selectedLocation });
    }
  }, [state.selectedLocation]);

  const region = {
    latitude: initialLocation.latitude,
    longitude: initialLocation.longitude,
    latitudeDelta: 0.0042,
    longitudeDelta: 0.0041,
  };

  function selectLocationHandler(event) {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedLocation({ lat: latitude, lng: longitude });
    dispatch({ type: 'SET_SELECTED_LOCATION', payload: { lat: latitude, lng: longitude } });
  }

  const handleMapClose = () => {
    setPage('profile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.backButton} onPress={handleMapClose}>
          <Ionicons name="arrow-back-circle" size={40} color="black" />
        </TouchableOpacity>
        <Text style={styles.navbarText}>User Location</Text>
        <TouchableOpacity style={styles.submitButton} onPress={handleMapClose}>
          <Ionicons name="checkmark-circle" size={40} color="black" />
        </TouchableOpacity>
      </View>
      <MapView style={styles.map} initialRegion={region} onPress={selectLocationHandler}>
        {selectedLocation && (
          <Marker
            coordinate={{
              latitude: selectedLocation.lat,
              longitude: selectedLocation.lng,
            }}
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    height: 120,
    backgroundColor: '#A5B4FA',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 50,
  },
  navbarText: {
    fontSize: 30,
  },
  map: {
    flex: 1,
  },
});

export default Map;
