import React, { Component } from 'react';
import { StyleSheet ,SafeAreaView, ScrollView, View, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

import Bus from './Drawer/Bus'
import Food from './Drawer/Food'
import library from './Drawer/library'

export default Main = DrawerNavigator (
  {
    Bus : {
      screen : Bus,
      navigationOptions: {
        title: "순환버스"
      }
    },
    Food : {
      screen : Food,
      navigationOptions: {
        title : "뭐먹을까"
      }
    },
    library : {
      screen : library,
      navigationOptions : {
        title : "도서관"
      }
    }
  }, {
    contentComponent : (props) => (
      <ScrollView>
        <SafeAreaView style={{flex:1}} forceInset={{ top: 'always', horizontal: 'never' }}>
          <View style={{paddingLeft:30, paddingRight:30, width:"100%", height:150, backgroundColor:'rgba(12,80,160,1)', justifyContent:'center', alignItems: 'center'}}>
            <Image source={require('../images/logo.png')} style={{width: "100%"}} resizeMode="contain" />
          </View>
          <DrawerItems {...props} />
        </SafeAreaView>
      </ScrollView>
    )
  }
)