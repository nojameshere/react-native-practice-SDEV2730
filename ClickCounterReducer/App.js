import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { number: state.number + 1 };
    case 'decrement':
      return { number: state.number - 1 };
    case 'reset':
      return { number: 1 };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, { number: 1 });

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a Quantity</Text>
      <Text style={styles.number}>Number: {state.number}</Text>
      <View style={styles.buttonHolder}>
        <TouchableOpacity style={styles.add} onPress={handleIncrement}>
          <Text style={styles.buttonText}>Add 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.remove} onPress={handleDecrement}>
          <Text style={styles.buttonText}>Remove 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reset} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cornflowerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 800,
    marginBottom: 30
  },
  number: {
    fontSize: 24,
    fontWeight: 800
  },
  buttonHolder: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20
  },
  add: {
    width: 80,
    height: 30,
    backgroundColor: 'yellowgreen',
    borderRadius: 10,
    justifyContent: 'center',
    margin: 10
  },
  remove: {
    width: 80,
    height: 30,
    backgroundColor: 'tomato',
    borderRadius: 10,
    justifyContent: 'center',
    margin: 10
  },
  reset: {
    width: 80,
    height: 30,
    backgroundColor: 'plum',
    borderRadius: 10,
    justifyContent: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  }
});
