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

export default class EmailLogin extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (key) => e => {
    this.setState({ [key]: e.nativeEvent.text })
  };

  async login(email, pass) {
    
    try {
        await firebase.auth()
            .signInWithEmailAndPassword(email, pass);

        console.log("Logged In!");
        this.props.navigation.navigate('Home');

    } catch (error) {
      Alert.alert(error.toString())
      console.log(error.code)
      console.log(error.message)

    }

  }

  handleSubmit = () => {
      this.login(this.state.email, this.state.password)
  };

  render() {
    
    return (<View style={styles.main}>
      <Text style={styles.title}>Email Address</Text>
      <TextInput style={styles.itemInput} onChange={this.handleChange('email')} />
      <Text style={styles.title}>Password</Text>
      <TextInput secureTextEntry={true} style={styles.itemInput} onChange={this.handleChange('password')} />
      <TouchableHighlight
        style={styles.button}
        underlayColor="white"
        onPress={this.handleSubmit}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableHighlight>
    </View>) 
      
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