import {View, StyleSheet, Text, Image} from 'react-native';

export default function Red() {

    return(
        <View style={styles.background}>
            <Text style={styles.text}>This is the Red screen.</Text>
            <Image source={require('../assets/img/red.png')} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'red',
        fontSize: 30,
        fontWeight: 700,
        marginTop: 30
    },
    background: {
        height: '100%',
        backgroundColor: '#E5ADAE',
        display: 'flex',
    },
    image: {
        height: '40%',
        aspectRatio: 1,
        alignSelf: 'center',
        marginTop: 200
    }
})