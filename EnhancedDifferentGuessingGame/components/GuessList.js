import {View, FlatList, Text, StyleSheet} from 'react-native';

export default function GuessList({guesses}) {

    return(
<View style={styles.guessList}>
        <FlatList
          data={guesses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View> 
              <Text>#{index + 1} == {item}</Text>
            </View>
          )}
        />  
      </View>
    )
}

const styles = StyleSheet.create({
    guessList: {
        display: 'flex',
        flexDirection: 'column-reverse'
    }
})