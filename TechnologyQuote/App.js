import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [quote, setQuote] = useState('');
  const [author, setShowAuthor] = useState(false);
  const handleButtonPress = () => {
    // Fetch or generate a new quote here
    const newQuote = "Any sufficiently advanced technology is indistinguishable from magic.";
    setQuote(newQuote);
    setShowAuthor(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{quote || 'Press Button for Technology Quote'}</Text>
      {author && <Text style={styles.text}>-- Arthur C. Clarke</Text>}
      <Button title="Display Quote" onPress={handleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'aqua',
  },
  text: {
    justifyContent: 'center',
    fontSize: 32,
    fontWeight: 700,
    padding: 20,
  }
});
