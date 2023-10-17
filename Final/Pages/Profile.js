import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import MyContext from '../Context/Context';

export function Profile({ setPage }) {
  const { state, dispatch } = useContext(MyContext);
  const [cameraPermission, setCameraPermission] = useState(false);
  const [takenImage, setTakenImage] = useState(null);

  useEffect(() => {
    checkCameraPermission(); // Check permission when the component mounts
  }, []);

  const checkCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status === 'granted') {
      setCameraPermission(true);
    } else {
      setCameraPermission(false);
    }
  };

  const handleLogOut = () => {
    dispatch({ type: 'SET_AUTHENTICATED', payload: false });
    dispatch({ type: 'SET_USERNAME', payload: ''})
  };

  const handleAuthOpen = () => {
    setPage('auth');
  };

  const handleMapOpen = () => {
    setPage('map');
  };

  const handleCameraPress = async () => {
    if (!cameraPermission) {
      await checkCameraPermission();
      if (!cameraPermission) {
        console.log('Camera permission not granted!');
        return;
      }
    }
  
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.7,
      });
  
      if (!result.cancelled) {
        // Update the profile photo in the context state
        dispatch({ type: 'SET_PROFILE_PHOTO', payload: result.uri });
        setTakenImage(result.uri); // Also update the local state for the image
      }
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  };
  return (
    <View style={styles.container}>
      {state.isAuthenticated ? (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.photoHolder}
            onPress={handleCameraPress}>
            {takenImage ? (
                <Image source={{ uri: takenImage }} style={styles.profilePhoto} />
            ) : (
                <Text>Take Photo</Text>
            )}
          </TouchableOpacity>
          <View style={styles.userDetailsContainer}>
            <Text style={styles.userDetails}>{state.userEmail}</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleMapOpen}>
            <Text style={styles.buttonText}>Location</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogOut}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={handleAuthOpen}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userDetailsContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
    },
    userDetails: {
        fontSize: 24,
    },
    button: {
        backgroundColor: '#F5C0C3',
        width: 200,
        height: 40,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#F59599',
        borderWidth: 1,
        marginTop: 15,
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '600',
    },
    photoHolder: {
        width: 200,
        aspectRatio: 1,
        backgroundColor: 'white',
        marginBottom: 20,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePhoto: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
    },
});
