import { StyleSheet, Text, View } from 'react-native';

export default function QuoteCard({ quote }) {
    return(
        <View style={styles.card}>
            <Text style={styles.quote}>{quote}</Text>
            <View style={styles.separator} />
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        textAlign: 'left',
    },
    quote: {
        fontSize: 20,
        fontWeight: 800,
        marginLeft: 20,
        paddingRight:10,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'left',
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    }
})