import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Navbar({ setSelected, selected }) {
  const handlePress = (page) => {
    setSelected(page);
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[styles.navitem, selected === 'home' && styles.active]}
        underlayColor="#FFF"
        onPress={() => handlePress('home')}
      >
        <View>
          <AntDesign name="home" size={24} color={selected === 'home' ? 'blue' : 'black'} />
          <Text style={[styles.text, selected === 'home' && styles.activeText]}>Home</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.navitem, selected === 'skills' && styles.active]}
        underlayColor="#FFF"
        onPress={() => handlePress('skills')}
      >
        <View>
          <AntDesign name="bars" size={24} color={selected === 'skills' ? 'blue' : 'black'} />
          <Text style={[styles.text, selected === 'skills' && styles.activeText]}>Skills</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.navitem, selected === 'school' && styles.active]}
        underlayColor="#FFF"
        onPress={() => handlePress('school')}
      >
        <View>
          <AntDesign
            name="iconfontdesktop"
            size={24}
            color={selected === 'school' ? 'blue' : 'black'}
          />
          <Text style={[styles.text, selected === 'school' && styles.activeText]}>School</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingBottom: 15,
  },
  navitem: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeText: {
    color: 'blue',
  },
  text: {
    marginTop: 5,
  },
});
