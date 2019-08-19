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
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import firebase from 'firebase';

export default class LogInOptions extends Component {
  state = {
    chosenSignIn: false
  }

  constructor() {
    super()
    GoogleSignin.configure({

    });    
  }
  onLoginSelection = (method) => {
    this.signInWith(method)
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  componentDidMount() {

  }

  render() {
    
          // <Button
          //   onPress={() => this.onLoginSelection('Google')}
          //   title="Google Sign In"
          //   color="gray"
          // />
    
    return (< View style={styles.main}>
      <View style={{ alignItems: 'center'}}>
          <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={this.signIn}
            disabled={this.chosenSignIn} />
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