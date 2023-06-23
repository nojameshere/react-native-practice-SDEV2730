import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';


export default function App() {
  const [orientation, setOrientation] = useState(
    Dimensions.get('window').width > Dimensions.get('window').height
      ? 'landscape'
      : 'portrait'
  );

  const updateOrientation = () => {
    const { width, height } = Dimensions.get('window');
    if (width > height) {
      setOrientation('landscape');
    } else {
      setOrientation('portrait');
    }
  };

  useEffect(() => {
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.DEFAULT
      );
    };

    Dimensions.addEventListener('change', updateOrientation);

    lockOrientation(); // Lock the initial orientation

    return () => {
      Dimensions.removeEventListener('change', updateOrientation);
    };
  }, []);

  return (
      <View style={styles.container}>
        {orientation === 'landscape' ? (
          <View style={styles.landscape}>
            <Text style={styles.headerLandscape}>Orientation by James Sales</Text>
            <View style={styles.rowBoxes} > 
            <View style={styles.smallBox} />
            <View style={styles.bigBox} />
            <View style={styles.smallBox} />
            <View style={styles.bigBox} />
            </View>
          </View>
        ) : (
          <View style={styles.portrait}> 
            <Text style={styles.headerPortrait}>Orientation by James Sales</Text>
            <View style={styles.columnBoxes} > 
            <View style={styles.smallBox} />
            <View style={styles.bigBox} />
            <View style={styles.smallBox} />
            <View style={styles.bigBox} />
            </View>
          </View>
        )}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  portrait: {
    flex: 1,
    width: '100%',
    backgroundColor: 'red',
  },
  headerPortrait: {
    textAlign: 'center',
    marginTop: 200,
    fontSize: 28,
    fontWeight: 800,
    marginBottom: 30
  },
  landscape: {
    flex: 1,
    width: '100%',
    backgroundColor: 'green',
    alignItems: 'center'
  },
  headerLandscape: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 28,
    fontWeight: 800,
    marginBottom: 20
  },
  columnBoxes: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  rowBoxes: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  smallBox: {
    backgroundColor: 'yellow',
    borderColor: 'blue',
    width: 45,
    aspectRatio: 1,
    borderWidth: 10,
    margin: 10
  },
  bigBox: {
    backgroundColor: 'yellow',
    borderColor: 'blue',
    width: 90,
    aspectRatio: 1,
    borderWidth: 20,
    margin: 10
  }
});
