/*
 * 제대로 가자, React-Native
 * by Aerain, System Software Lab
 * in Jeju National University.
*/

import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput } from 'react-native';
import Home from './views/Home';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={styles.main}>
        <StatusBar
          backgroundColor="rgba(12,80,160,1)"
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