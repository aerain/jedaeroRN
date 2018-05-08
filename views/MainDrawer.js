import React, { Component } from 'react';
import { StyleSheet ,SafeAreaView, ScrollView, View, Image, Text, Alert } from 'react-native';
import { Header } from 'react-native-elements';
import { createDrawerNavigator, DrawerItems, NavigationActions } from 'react-navigation';
import normalize from 'react-native-elements/src/helpers/normalizeText'
import Icon from 'react-native-vector-icons/FontAwesome'

import Bus from './Drawer/Bus'
import Food from './Drawer/Food'
import library from './Drawer/library'

import HaksikTap from './Drawer/FoodList/haksik'

export default Main = createDrawerNavigator (
  {
    Bus : {
      screen : Bus,
      navigationOptions: {
        title: "순환버스",
        drawerIcon : ({ tintColor }) => <Icon name="bus" size={normalize(12)} color={tintColor} />
      }
    },
    Food : {
      screen : Food,
      navigationOptions: {
        title : "뭐먹을까",
        drawerIcon : ({ tintColor }) => <Icon name="thumbs-o-up" size={normalize(12)} color={tintColor} />
      }
    },
    library : {
      screen : library,
      navigationOptions : {
        title : "도서관",
        drawerIcon : ({ tintColor }) => <Icon name="book" size={normalize(12)} color={tintColor} />
      }
    }
  }, {
    contentComponent : (props) => (
      <ScrollView>
        <SafeAreaView style={{flex:1}} forceInset={{ top: 'always', horizontal: 'never' }}>
          <View style={{paddingLeft:30, paddingRight:30, width:"100%", height:150, backgroundColor:'rgba(12,80,160,1)', justifyContent:'center', alignItems: 'center'}}>
            <Image source={require('../images/logo.png')} style={{width: "100%"}} resizeMode="contain" />
          </View>
          <DrawerItems {...props}
            onItemPress= {({route, focused }) => {
              // if (!focused) {
              //   let subAction;
              //   // if the child screen is a StackRouter then always navigate to its first screen (see #1914)
              //   if (route.index !== undefined && route.index !== 0) {
              //     subAction = NavigationActions.reset({
              //       index: 0,
              //       actions: [
              //         NavigationActions.navigate({
              //           routeName: route.routes[0].routeName,
              //         }),
              //       ],
              //     });
              //   }
                // props.navigation.navigate(route.routeName, undefined, subAction);
                props.navigation.navigate(route.routeName);
              // }
            }}
          />
        </SafeAreaView>
      </ScrollView>
    ),
    contentOptions: {
      activeTintColor: 'white',
      activeBackgroundColor:'rgba(12,80,160,.7)',
      labelStyle: {
        fontSize: normalize(12),
        fontFamily: 'NotoSansCJKkr-Regular',
        fontWeight: "normal"
      },
    },

  }
)