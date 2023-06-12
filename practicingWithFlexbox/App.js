import { StyleSheet, View } from 'react-native';
import Combined from './pages/Combined';
import SingleRow from './pages/SingleRow';
import Rows from './pages/Rows';
import Columns from './pages/Columns';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SingleRow /> */}
      {/* <Rows /> */}
      {/* <Columns /> */}
      <Combined />
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
});
