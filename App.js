/*
 * 제대로 가자, React-Native
 * by Aerain, System Software Lab
 * in Jeju National University.
*/

import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, PermissionsAndroid } from 'react-native';
import Home from './views/Home';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount = () => this.requestPermissions();
  
  requestPermissions = async () => {
    try {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        )
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        )
    } catch (error) {
        console.warn(error);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <StatusBar
          backgroundColor="rgba(12,80,160,1)"
          barStyle="light-content"
        />
        <Home />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  }
});