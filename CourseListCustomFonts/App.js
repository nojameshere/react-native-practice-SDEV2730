import { FlatList, StyleSheet, Text, View } from 'react-native';
import CourseCard from './CourseCard';

export default function App() {

  const classes = [
    {
      'id': 1,
      'course': 'SDEV 2110 - Javascript Programming I',
      'description': 'Basics of web development in Javascript'
    },
    {
      'id': 2,
      'course': 'SDEV 2410 - C# Programming I',
      'description': 'Introduction to C# and Visual Studio'
    },
    {
      'id': 3,
      'course': 'SDEV 1060 - Unit Testing',
      'description': 'Creating and running unit tests within Visual Studio'
    },
    {
      'id': 4,
      'course': 'SDEV 2420 - C# Programming II',
      'description': 'More in-depth C# with classes and inheritance'
    },
    {
      'id': 5,
      'course': 'SDEV 1040 - Database Development Fundamentals',
      'description': 'Creating and manipulating MySQL databases'
    },
    {
      'id': 6,
      'course': 'SDEV 2611 - Web API Fundamentals',
      'description': 'Creating and exporing APIs using .NET Core 2'
    }
  ]

  const renderItem = ({ item }) => {
    return (
      <CourseCard item={item} />
    )
  }

  return (
    <View style={styles.background}>
      <Text style={styles.header}>Course Listing</Text>
      <FlatList style={styles.container}
        data = {classes}
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
  }
});
