import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.iconHolder}>
      <MaterialCommunityIcons name="death-star" size={60} color="black" />
      </View>
      <View style={styles.iconHolder}>
      <MaterialCommunityIcons name="death-star-variant" size={60} color="black" />
      </View>
      <View style={styles.iconHolder}>
      <AntDesign name="ie" size={60} color="black" />
      </View>
      <View style={styles.iconHolder}>
      <AntDesign name="github" size={60} color="black" />
      </View>
      <View style={styles.iconHolder}>
      <AntDesign name="barcode" size={60} color="black" />
      </View>
      <View style={styles.iconHolder}>
      <AntDesign name="apple-o" size={60} color="black" />
      </View>
      <View style={styles.iconHolder}>
      <AntDesign name="find" size={60} color="black" />
      </View>
      <View style={styles.iconHolder}>
      <AntDesign name="warning" size={60} color="black" />
      </View>
      <View style={styles.iconHolder}>
      <AntDesign name="HTML" size={60} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '50%',
    transform: [{translateY: -170}],
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  iconHolder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    aspectRatio: 1,
    borderWidth: 4,
    backgroundColor: '#CD9EFF',
    margin: 5,
  },
});

