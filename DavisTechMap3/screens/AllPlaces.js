import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

import PlacesList from '../components/Places/PlacesList';
import { fetchPlaces, deletePlace } from '../util/database';

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    console.log('Screen is focused:', isFocused);
    async function loadPlaces() {
      const places = await fetchPlaces();
      console.log('Loaded Places:', places); // Log the loaded places
      setLoadedPlaces(places);
    }
  
    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused]);

  const handleDelete = async (id) => {
    try {
      await deletePlace(id);

      const updatedPlaces = await fetchPlaces();
      setLoadedPlaces(updatedPlaces);
    } catch (error) {
      // Handle deletion error, if needed
    }
  };

  return <PlacesList places={loadedPlaces} onDelete={handleDelete} setLoadedPlaces={setLoadedPlaces} />
}

export default AllPlaces;
