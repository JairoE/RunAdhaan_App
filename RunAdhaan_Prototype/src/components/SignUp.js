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
import firebase from 'firebase';

export default class SignIn extends Component {
  state = {
    email: '',
    password: '',
    confirm_password: ''
  };


  handleChange = (key) => e => {
    this.setState({ [key]: e.nativeEvent.text })
  };

  async signup(email, pass) {
    // TODO: Check for real email address
    try {
        await firebase.auth()
            .createUserWithEmailAndPassword(email, pass);

      console.log("Account created");
      debugger

        // Navigate to the Home page, the user is auto logged in
      this.props.navigation.navigate('Home');
    } catch (error) {
        Alert.alert(error.toString())
    }

  }

  handleSubmit = () => {
    if (this.state.password == this.state.confirm_password) {
      this.signup(this.state.email, this.state.password)
    } else {
      Alert.alert('Please make sure both password fields match');
    }
  };

  render() {
    return (
      <View style={styles.main}>
      <Text style={styles.title}>Email Address</Text>
      <TextInput style={styles.itemInput} onChange={this.handleChange('email')} />
      <Text style={styles.title}>Password</Text>
      <TextInput secureTextEntry={true} style={styles.itemInput} onChange={this.handleChange('password')} />
      <Text style={styles.title}>Confirm Password</Text>
      <TextInput secureTextEntry={true} style={styles.itemInput} onChange={this.handleChange('confirm_password')} />
      <TouchableHighlight
        style={styles.button}
        underlayColor="white"
        onPress={this.handleSubmit}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#26619c'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
    marginBottom: 20
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});