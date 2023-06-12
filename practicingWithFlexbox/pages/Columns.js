import {StyleSheet, View, Text} from 'react-native';

export default function Columns() {
    return (
        <View style={columnStyles.container}>
            <Text>Columns of boxes</Text>
            <View style={columnStyles.columnContainer}>
                <View>
                    <View style={columnStyles.green} />
                </View>
                <View>
                    <View style={columnStyles.blue} />
                    <View style={columnStyles.blue} />
                </View>
                <View>
                    <View style={columnStyles.green} />
                    <View style={columnStyles.green} />
                    <View style={columnStyles.green} />
                </View>
                <View>
                    <View style={columnStyles.blue} />
                    <View style={columnStyles.blue} />
                    <View style={columnStyles.blue} />
                    <View style={columnStyles.blue} />
                </View>
            </View>
        </View>
    )
}

const columnStyles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    columnContainer: {
      flexDirection: 'row',
      alignItems: 'center',
        marginTop: 10,
    },
    blue: {
      backgroundColor: '#6014FA',
      width: 50,
      height: 50,
      margin: 2,
    },
    green: {
      backgroundColor: '#188E26',
      width: 50,
      height: 50,
      margin: 2,
    },
  });
  