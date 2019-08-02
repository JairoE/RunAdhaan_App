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

export default class LogInOptions extends Component {
  state = {
    chosenSignIn: false
  }

  onLoginSelection = (method) => {
    this.signInWith(method)
  }

  async signInWith(method) {
    if (method == "Google") {
      var provider = new firebase.auth.GoogleAuthProvider();
      try {
        await firebase.auth().signInWithRedirect(provider);
              console.log('signing in with google');
              var token = result.credential.accessToken;
              // The signed-in user info.
              var user = result.user;
      } catch (error) {
        Alert.alert(error.toString())
        console.log(error.code)
        console.log(error.message)
        console.log(error.email)
        console.log(error.credential)
      }
    }
  }

  render() {
    
    return (< View style={styles.main}>
      <View>
      <View style={{ backgroundColor: 'white' }}>
          <Button
            onPress={() => this.onLoginSelection('Google')}
            title="Google Sign In"
            color="gray"
          />
        </View>
        <View style={{ backgroundColor: 'blue' }}>
          <Button
            onPress={() => this.onLoginSelection('Facebook')}
            title="Facebook Sign In"
            color="white"
          />
        </View>
        <View style={{ backgroundColor: 'red' }}>
          <Button
            onPress={() => this.props.navigation.navigate('EmailLogIn')}
            title="Email Sign In"
            color="white"
          />
        </View>
      </View>
    </View >) 
      
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