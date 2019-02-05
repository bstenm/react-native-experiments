import HomeScreen from './HomeScreen';
import QuoteScreen from './QuoteScreen';
import {createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
      HomeScreen,
      QuoteScreen,
});

export default createAppContainer(AppNavigator);