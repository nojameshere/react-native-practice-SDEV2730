import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Button({buttonText, passedFunction}) {

    return (

        <TouchableOpacity style={styles.buttonBody} onPress={passedFunction}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  buttonBody: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    width: 200,
    height: 40,
    marginTop: 10,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  }
})