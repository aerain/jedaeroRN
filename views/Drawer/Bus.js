import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';

import { Header, ListItem } from 'react-native-elements';
import normalize from 'react-native-elements/src/helpers/normalizeText'

export default class Bus extends Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={
            { 
              icon: 'menu', 
              color: '#fff', 
              size:normalize(20), 
              onPress: () => this.props.navigation.openDrawer(), 
              underlayColor: "rgba(0,0,0,0)"
            }
          }
          centerComponent={
            { 
              text: '제대로 가자', 
              style: styles.headerCenterStyle, 
            }
          }
          outerContainerStyles={styles.headerStyle}
          placement='left'
          key="header"
        />
        <ListItem
          title="학식 먹으러 가 볼까요?"
          subtitle="제발;;"
          chevron
          onPress={() => this.props.navigation.navigate('Haksik')}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:45
  },
  headerStyle: {
    backgroundColor:'rgba(12,80,160,1)',
  },
  headerCenterStyle: { 
    color: '#fff', 
    fontSize: normalize(12), 
    fontFamily:'NotoSansCJKkr-Regular',
    paddingLeft:20
  }
})