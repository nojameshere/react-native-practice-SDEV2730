import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementHamburger':
      return { ...state, hamburger: state.hamburger + 1 };
    case 'decrementHamburger':
      return { ...state, hamburger: state.hamburger - 1 };
    case 'incrementCheeseburger':
      return { ...state, cheeseburger: state.cheeseburger + 1 };
    case 'decrementCheeseburger':
      return { ...state, cheeseburger: state.cheeseburger - 1 };
    case 'incrementFry':
      return { ...state, fries: state.fries + 1 };
    case 'decrementFry':
      return { ...state, fries: state.fries - 1 };
    case 'incrementDrink':
      return { ...state, drinks: state.drinks + 1 };
    case 'decrementDrink':
      return { ...state, drinks: state.drinks - 1 };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, { hamburger: 0, cheeseburger: 0, fries: 0, drinks: 0 });

  const handleHamburgerIncrement = () => {
    dispatch({ type: 'incrementHamburger' });
  };
  const handleCheeseburgerIncrement = () => {
    dispatch({ type: 'incrementCheeseburger' });
  };
  const handleFryIncrement = () => {
    dispatch({ type: 'incrementFry' });
  };
  const handleDrinkIncrement = () => {
    dispatch({ type: 'incrementDrink' });
  };

  const handleHamburgerDecrement = () => {
    if (state.hamburger > 0) {
      dispatch({ type: 'decrementHamburger' });
    }
  };

  const handleCheeseburgerDecrement = () => {
    if (state.cheeseburger > 0) {
      dispatch({ type: 'decrementCheeseburger' });
    }
  };

  const handleFryDecrement = () => {
    if (state.fries > 0) {
      dispatch({ type: 'decrementFry' });
    }
  };

  const handleDrinkDecrement = () => {
    if (state.drinks > 0) {
      dispatch({ type: 'decrementDrink' });
    }
  };

  const total = 
    state.hamburger * 3 +
    state.cheeseburger * 4 +
    state.fries * 2 +
    state.drinks; 

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fast Food Order</Text>
      <View style={styles.menu}>
      <Text style={styles.menuItem}>Hamburger $3</Text>
      <Text style={styles.menuItem}>Cheeseburger $4</Text>
      <Text style={styles.menuItem}>Fries $2</Text>
      <Text style={styles.menuItem}>Drinks $1</Text>
      </View>
      <View style={styles.itemQuantity}>
        <Text style={styles.lineItem}>Hamburger: {state.hamburger}</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleHamburgerIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.subtractButton, state.hamburger === 0 && styles.disabledButton]} onPress={handleHamburgerDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemQuantity}>
        <Text style={styles.lineItem}>Cheeseburger: {state.cheeseburger}</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleCheeseburgerIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.subtractButton, state.cheeseburger === 0 && styles.disabledButton]} onPress={handleCheeseburgerDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemQuantity}>
        <Text style={styles.lineItem}>Fries: {state.fries}</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleFryIncrement}>
          <Text style={styles.buttonText} >+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.subtractButton , state.fries === 0 && styles.disabledButton]} onPress={handleFryDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemQuantity}>
        <Text style={styles.lineItem}>Drinks: {state.drinks}</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleDrinkIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.subtractButton, state.drinks === 0 && styles.disabledButton]} onPress={handleDrinkDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.total}>Total: ${total}</Text>
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
    fontSize: 48,
    fontWeight: 800,
    marginBottom: 30
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 40
  },
  menuItem: {
    fontSize: 22,
    fontWeight: 600
  },
  itemQuantity: {
    display: 'flex',
    flexDirection: 'row',
  },
  lineItem: {
    fontSize: 28,
    marginRight: 20
  },
  addButton: {
    backgroundColor: 'green',
    borderRadius: 10,
    width: 30,
    height: 30,
    margin: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  subtractButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    width: 30,
    height: 30,
    margin: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  disabledButton: {
    backgroundColor: 'lightgray'
  },
  buttonText: {
    color: 'white',
    fontSize: 22
  },
  total: {
    fontSize: 48,
    marginTop: 60
  }
});
