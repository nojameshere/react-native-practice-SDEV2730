
import { StyleSheet, Text, View, FlatList } from 'react-native';
import QuoteCard from './QuoteCard';

export default function App() {


  const quotes = [
    {
    id: 1,
    text: 'What!? I can\'t get involved! I\'ve got work to do! It\'s not that I like the Empire, I hate it, but there\'s nothing I can do about it right now. It\'s such a long way from here.',
    },
    {
    id: 2,
    text: 'Remember, a Jedi can feel the Force flowing through him. Don\'t underestimate the Force.',
    },
    {
    id: 3,
    text: 'A tremor in the Force. The last time I felt it was in the presence of my old master.',
    },
    {
    id: 4,
    text: 'But with the blast shield down, I can\'t even see! How am I supposed to fight?',
    },
    {
    id: 5,
    text: 'Look, I ain\'t in this for your revolution, and I\'m not in it for you, Princess. I expect to be well paid. I\'m in it for the money.',
    },
    {
    id: 6,
    text: 'She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander.',
    },
    {
    id: 7,
    text: 'What good is a reward if you ain\'t around to use it? Besides, attacking that battle station ain\'t my idea of courage. It\'s more like...suicide.',
    },
    {
    id: 8,
    text: 'You weren\'t on any mercy mission this time. Several transmissions were beamed to this ship by Rebel spies. I want to know what happened to the plans they sent you.',
    },
    {
    id: 9,
    text: 'You\'re all clear, kid. Let\'s blow this thing and go home!',
    },
    ];

  return (
    <View style={styles.background}>
      <Text style={styles.header}>Quotes from Star Wars</Text>
      <FlatList 
        style={styles.container}
        data={quotes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <QuoteCard quote={item.text} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    textAlign: 'left',
    marginBottom: 70,
  },
  header: {
    marginBottom: 20,
    fontSize: 32,
    fontWeight: 600,
    marginTop: 80,
  }
});
