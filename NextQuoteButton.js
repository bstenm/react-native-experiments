import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const NextQuoteButton = ({ onPress }) => (
      <TouchableOpacity
            style={styles.button}
            onPress={onPress}
      >
            <Text style={styles.buttonText}>Next Quote</Text>
      </TouchableOpacity>
);

const styles = StyleSheet.create({
      button: {
            borderWidth: 2,
            borderColor: '#FFF',
            padding: 10,
      },
      buttonText: {
            color: '#FFF',
            fontSize: 18,
      }
})
NextQuoteButton.defaultProps = {};

NextQuoteButton.propTypes = {};

export default NextQuoteButton;