import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Quote = ({ quoteText, quoteSource }) => (
      <View style={styles.container}>
            <Text style={styles.text}>{quoteText}</Text>
            <Text style={styles.source}>{quoteSource}</Text>
      </View>
);

const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: 'center',
      },
      text: {
            fontFamily: 'Roboto',
            fontSize: 19,
            color: '#AAA',
      },
      source: {
            fontFamily: 'Roboto',
            color: '#656565',
            textAlign: 'right'
      }
});

export default Quote;