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

export default class LogIn extends Component {
  state = {
    email: '',
    password: '',
    signInMethod: false
  };


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

  emailSignIn = () => {
    return (
      <View>
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
      </View>
    )
  }

  onLoginSelection = (method) => {
    this.setState({
      signInMethod: method
    })
  }

  render() {
    let chosenSignIn = this.state.signInMethod
    return (
      <View style={styles.main}>
        { chosenSignIn ?
          (<View>
            <View style={{backgroundColor: 'white'}}>
              <Button
                onPress={this.onLoginSelection('Google')}
                title="Google Sign In"
                color="black"
              />
            </View>
            <View style={{ backgroundColor: 'blue' }}>
              <Button
                onPress={this.onLoginSelection('Facebook')}
                title="Facebook Sign In"
                color="white"
              />
            </View>
            <View style={{backgroundColor: 'red'}}>
              <Button
                onPress={this.onLoginSelection('Email')}
                title="Email Sign In"
                color="white"
              />
          </View>
          </View>)
          :
          (this.emailSignIn())
      }
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