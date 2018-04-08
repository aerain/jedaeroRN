import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {SearchBar} from 'react-native-elements'

export default class Bus extends Component {
    render() {
      return (
        <View style={styles.container}>
        <Text>도서검색</Text>
        <SearchBar 
        onChangeText={'123'}
        onClear={'123'}
        placeholder='Type Here...' />

        </View>
      )
    }
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    
    headerStyle: {
      backgroundColor:'rgba(0,0,0,.75)',
    }
  })