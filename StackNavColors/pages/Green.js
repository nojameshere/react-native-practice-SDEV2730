import {View, StyleSheet, Text, Image} from 'react-native';

export default function Green() {

    return(
        <View style={styles.background}>
            <Text style={styles.text}>This is the Green screen.</Text>
            <Image source={require('../assets/img/green.png')} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'green',
        fontSize: 30,
        fontWeight: 700,
        marginTop: 30
    },
    background: {
        height: '100%',
        backgroundColor: 'lightgreen',
        display: 'flex',
    },
    image: {
        height: '40%',
        aspectRatio: 1,
        alignSelf: 'center',
        marginTop: 200
    }
})