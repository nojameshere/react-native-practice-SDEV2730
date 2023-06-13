import { StyleSheet, Text, View } from 'react-native';

export default function QuoteCard({ quote, author }) {
    return(
        <View style={styles.card}>
            <Text style={styles.quote}>{quote}</Text>
            <Text style={styles.author}>{author}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {

    },
    quote: {
        fontSize: 20,
        fontWeight: 800,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 5,
    },
    author: {
        fontSize: 16,
        textAlign: 'right',
        marginRight: 20,
        fontStyle: 'italic',
    }
})