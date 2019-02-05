import React from 'react';
import {
      StyleSheet,
      View,
      Platform,
      UIManager,
      LayoutAnimation,
} from 'react-native';
import Quote from './Quote';
import NextQuoteButton from './NextQuoteButton';
import quotes from './quotes.json';

const tranquil = {
      duration: 500,
      create: {
            duration: 1000,
            delay: 300,
            type: LayoutAnimation.Types.easeIn,
            property: LayoutAnimation.Properties.opacity,
      },
      update: {
            type: LayoutAnimation.Types.easeInEaseOut,
            property: LayoutAnimation.Properties.opacity,
      },
      delete: {
            duration: 200,
            type: LayoutAnimation.Types.easeOut,
            property: LayoutAnimation.Properties.opacity,
      },
};

class QuoteScreen extends React.Component {
      state = { quoteIndex: 0 }

      constructor(props) {
            super(props);
            if (Platform.OS === 'android') {
                  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
            }
      }

      componentWillUpdate() {
            LayoutAnimation.configureNext(tranquil);
      }

      incrementQuoteIndex = () => {
            let idx = this.state.quoteIndex + 1;
            idx = idx === quotes.length ? 0 : idx;

            this.setState({ quoteIndex: idx });
      }

      render() {
            const { quoteIndex } = this.state;
            const { text , source } = quotes[quoteIndex];
            return (
                  <View style={styles.container}>
                        <Quote quoteText={text} quoteSource={source} />
                        <NextQuoteButton onPress={this.incrementQuoteIndex} />
                  </View>
            );
      }
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#161737',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 40
      }
});


export default QuoteScreen;