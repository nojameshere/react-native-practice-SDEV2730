import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function Map() {
    const [selectedLocation, setSelectedLocation] = useState();


    const region = {
        latitude: 41.0292163,
        longitude: -111.9250044,
        latitudeDelta: 0.0042,
        longitudeDelta: 0.0041,
    }

    function selectLocationHandler(event) {
        const lat = event.nativeEvent.coordinate.latitude;
        const lng = event.nativeEvent.coordinate.longitude;

        setSelectedLocation({lat: lat, lng: lng});
    }
  return (
      <MapView style={styles.map} 
      provider={MapView.PROVIDER_GOOGLE}
      initialRegion={region}
      onPress={selectLocationHandler}
      >
        {selectedLocation && <Marker
        title='Picked Location' 
        coordinate={{
            latitude: selectedLocation.lat, 
            longitude: selectedLocation.lng
            }}
        />}
      </MapView>  
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
