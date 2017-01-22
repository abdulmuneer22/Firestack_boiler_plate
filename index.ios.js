/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Firestack from 'react-native-firestack'
var firestack = new Firestack();

const LoginTest = ()=> {
  firestack.auth.signInWithEmail('ari@fullstack.io', '123456')
  .then((user) => {
    console.log('User successfully logged in', user)
  })
  .catch((err) => {
    console.error('User signin error', err);
  })
}

export default class firestackapp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
        onPress={()=>{LoginTest()}}
        >Login</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('firestack', () => firestackapp);
