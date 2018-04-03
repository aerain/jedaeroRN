import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { DrawerNavigator } from 'react-navigation';

import Bus from './Drawer/Bus'
import Food from './Drawer/Food'

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
    }
  }
)