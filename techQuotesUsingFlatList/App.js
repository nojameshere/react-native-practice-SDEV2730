import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
// import quotesData from './assets/quotes.json';  //This is commented out to meet rubric requirements

export default function App() {
  //const { quotes } = quotesData;
  const quotes = [
    {
        "id": 1,
        "quote": "Technology is best when it brings people together.",
        "author": "Matt Mullenweg"
    },
    {
        "id": 2,
        "quote": "The science of today is the technology of tomorrow.",
        "author": "Edward Teller"
    },
    {
        "id": 3,
        "quote": "Any sufficiently advanced technology is indistinguishable from magic.",
        "author": "Arthur C. Clarke"
    },
    {
        "id": 4,
        "quote": "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
        "author": "Bill Gates"
    },
    {
        "id": 5,
        "quote": "Technology is a word that describes something that doesn't work yet.",
        "author": "Douglas Adams"
    },
    {
        "id": 6,
        "quote": "It has become appallingly obvious that our technology has exceeded our humanity.",
        "author": "Albert Einstein"
    },
    {
        "id": 7,
        "quote": "The great myth of our times is that technology is communication.",
        "author": "Libby Larsen"
    },
    {
        "id": 8,
        "quote": "The Internet is becoming the town square for the global village of tomorrow.",
        "author": "Bill Gates"
    },
    {
        "id": 9,
        "quote": "Technology is a useful servant but a dangerous master.",
        "author": "Christian Lous Lange"
    },
    {
        "id": 10,
        "quote": "The art challenges the technology, and the technology inspires the art.",
        "author": "John Lasseter"
    }
] //This is also in a JSON object located within the assets folder. 

  const renderItem = ({ item }) => {
    return (
      <View key={item.id}>
        <Text style={styles.quote}>{item.quote}</Text>
            <Text style={styles.author}>{item.author}</Text>
      </View>
    )
  }

  return (
    <View style={styles.background}>
      <Text style={styles.header}>Technology Quotes</Text>
      <FlatList style={styles.container}
        data = {quotes}
        keyExtractor = { (item) => item.id}
        renderItem = {renderItem}
        ItemSeparatorComponent={ () => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'tan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 3,
    marginBottom: 30,
  },
  header: {
    marginBottom: 20,
    fontSize: 36,
    fontWeight: 800,
    marginTop: 60,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginTop: 10
  },
  quote: {
    fontSize: 20,
    fontWeight: 800,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 5,
},
author: {
    fontSize: 16,
    textAlign: 'right',
    marginRight: 20,
    fontStyle: 'italic',
}
});
