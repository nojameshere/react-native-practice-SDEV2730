// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';

// export default function App() {
//   const [textField, setTextField] = useState('');

//   const setColor = () => {
//     setTextField('Purple');
//   };

//   const setCar = () => {
//     setTextField('1994 Mini Cooper S');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>{textField || 'Press button to show favorites'}</Text>
//       <Button onPress={setCar} title="Set Car" style={styles.button} />
//       <Button onPress={setColor} title="Set Color" style={styles.button} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#883CE5',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#fff',
//     marginBottom: 32,
//   },
//   button: {
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#fff',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     marginVertical: 10,
//   }
// });
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [textField, setTextField] = useState('');

  const setColor = () => {
    setTextField('Purple');
  };

  const setCar = () => {
    setTextField('1994 Mini Cooper S');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{textField || 'Press button to show favorites'}</Text>
      <TouchableOpacity onPress={setCar} style={styles.button}>
        <Text style={styles.buttonText}>Favorite Car</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={setColor} style={styles.button}>
        <Text style={styles.buttonText}>Favorite Color</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#883CE5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 36,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
});
