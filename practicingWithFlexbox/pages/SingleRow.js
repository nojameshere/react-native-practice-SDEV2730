import { StyleSheet, Text, View } from "react-native";

export default function SingleRow() {

    return (
        <View style={styles.container}>
            <Text>Single row with space around.</Text>
            <View style={styles.boxes}>
                <View style={styles.green} />
                <View style={styles.blue} />
                <View style={styles.green} />
                <View style={styles.blue} />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    boxes: {
      flexDirection: 'row',
   
    },
    blue: {
      backgroundColor: '#6014FA',
      width: 50,
      height: 50,
      margin: 16,
    },
    green: {
      backgroundColor: '#188E26',
      width: 50,
      height: 50,
      margin: 16,
    },
  });