import {StyleSheet, View, Text} from 'react-native';

export default function Rows() {
    return (
        <View style={rowsStyles.container}>
            <Text>Rows of boxes</Text>
            <View style={rowsStyles.rowContainer}>
                <View style={rowsStyles.row}>
                    <View style={rowsStyles.green} />
                </View>
                <View style={rowsStyles.row}>
                    <View style={rowsStyles.blue} />
                    <View style={rowsStyles.blue} />
                </View>
                <View style={rowsStyles.row}>
                    <View style={rowsStyles.green} />
                    <View style={rowsStyles.green} />
                    <View style={rowsStyles.green} />
                </View>
                <View style={rowsStyles.row}>
                    <View style={rowsStyles.blue} />
                    <View style={rowsStyles.blue} />
                    <View style={rowsStyles.blue} />
                    <View style={rowsStyles.blue} />
                </View>
            </View>
        </View>
    )
}

const rowsStyles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    },
    rowContainer: {
      alignItems: 'center',
      marginTop: 10,
    },
    row: {
        flexDirection: 'row'
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
  