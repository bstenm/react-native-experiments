import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class HomeScreen extends React.Component {
      render() {
            return (
                  <View style={styles.container}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('QuoteScreen')}>
                              <Text style={styles.button}>Give me wisdom</Text>
                        </TouchableOpacity>
                        <Text style={styles.text}>I'm ready to relax</Text>
                  </View>
            );
      }
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#819dad',
            alignItems: 'center',
            justifyContent: 'center',
      },
      text: {
            fontSize: 19,
            color: '#fff',
            fontStyle: 'italic',
      },
      button: {
            backgroundColor: '#161737',
            borderRadius: 20,
            padding: 10,
            color: '#fff',
            marginBottom: 20,
            shadowColor: '#303838',
            shadowOffset: { width: 0, height: 50 },
            shadowRadius: 10,
            shadowOpacity: 0.35,
      }
});

export default HomeScreen;