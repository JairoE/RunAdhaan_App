import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';


// we will use these two screens later in our AppNavigator
import AddItem from './src/screens/AddItem';
import List from './src/screens/List';
import SignUp from './src/components/SignUp';
import LogInOptions from './src/screens/LogInOptions';
import EmailLogIn from './src/screens/EmailLogin'

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
  },
  LogInOptions: {
    screen: LogInOptions,
  },
  EmailLogIn: {
    screen: EmailLogIn
  },
  SignUp: {
    screen: SignUp,
  },
  Home: {
    screen: Home,
  },
}, {
  initialRouteName: 'Welcome'
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}