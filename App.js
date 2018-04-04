/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaView , StatusBar, StyleSheet } from 'react-native';
import Home from './views/Home';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.main}>
        <StatusBar
          backgroundColor="rgba(0,0,0,.8)"
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