import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, TouchableHighlight } from 'react-native';

export default function App() {
  const fadeInValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fadeIn = () => {
      Animated.timing(fadeInValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    };

    fadeIn();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => alert('You clicked on the school image')} opacity={0.5}>
          <Animated.Image
            source={require('./assets/dtc.jpg')}
            style={[styles.localImage, { opacity: fadeInValue }]}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Davis Technical College</Text>
      </View>
      <View style={styles.container}>
        <TouchableHighlight onPress={ () => alert('You booped the cat snoot')} underlayColor={'yellow'}>
            <Image
              source={{
                height: 200,
                width: 300,
                uri: 'https://picsum.photos/id/40/200/300'
              }}
            />
        </TouchableHighlight>
        <Text style={styles.text}>Cat Nose</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  localImage: {
    marginTop: 190,
    width: 300,
    height:200,
    resizeMode: 'contain',
    margin: 0
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  opacity: {

  },
  highlight: {
    backgroundColor: '#FFFFFF',
  }
});
