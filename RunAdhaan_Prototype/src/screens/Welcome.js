import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert,
  Button
} from 'react-native';

export default class Welcome extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <View>
        <Button title="Sign Up" color="blue" onPress={() => this.props.navigation.navigate('SignUp')}/>
        <Button
          title="Log In" color="red"
          onPress={() => this.props.navigation.navigate('LogIn')}
        />

      </View>
    );
  }
}

