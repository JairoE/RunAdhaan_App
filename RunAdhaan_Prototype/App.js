import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';


// we will use these two screens later in our AppNavigator
import AddItem from './src/screens/AddItem';
import List from './src/screens/List';
import SignUp from './src/components/SignUp';
import LogIn from './src/components/LogIn';
import AuthMethods from './src/components/AuthMethods';

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
  },
  LogIn: {
    screen: LogIn,
  },
  SignUp: {
    screen: SignUp,
  },
  Home: {
    screen: Home,
  },
  List: {
    screen: List
  }
}, {
  initialRouteName: 'Welcome'
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}