import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import { Header } from 'react-native-elements';
import normalize from 'react-native-elements/src/helpers/normalizeText'

export default class Bus extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={
            { 
              icon: 'menu', 
              color: '#fff', 
              size:normalize(30), 
              onPress: ()=> {this.props.navigation.navigate("DrawerOpen")}, 
              underlayColor: "rgba(0,0,0,0)"
            }
          }
          centerComponent={
            { 
              text: '순환버스', 
              style: styles.headerCenterStyle, 
            }
          }
          outerContainerStyles={styles.headerStyle}
        />
        <Text>리ㅏㄴㅁㄹ;러</Text>
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
  },
  headerCenterStyle: { 
    color: '#fff', 
    fontSize: normalize(18), 
    fontWeight: 'bold' 
  }
})