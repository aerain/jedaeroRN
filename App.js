/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import Home from './views/Home';

export default class App extends Component {
  render() {
    return (
      <View style={styles.main}>
        <StatusBar
          backgroundColor="rgba(0,0,0,.8)"
        />
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  }
});