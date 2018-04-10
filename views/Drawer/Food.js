import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Header } from 'react-native-elements';
import normalize from 'react-native-elements/src/helpers/normalizeText'

import FoodList from './FoodList/foodlist';
import HaksikTap from './FoodList/haksik'
import Dormitory from './FoodList/dormitory';

class HaksikMenu extends Component {
  constructor(props) {
    super(props);
  }

  static router = HaksikTap.router;
  render() {
    return (
      <View style={{flex : 1, }}>
        <View elevation={2} style={{justifyContent: 'center', alignItems:'center', width: '100%', backgroundColor:'white' ,marginBottom:5}}>
          <Text style={{fontSize:normalize(16), fontFamily: "NotoSansCJKkr-Thin"}}>학식 메뉴</Text>
        </View>
        <HaksikTap navigation={this.props.navigation} />
      </View>
    )
  }
}
const FoodStack = createStackNavigator(
  {
    FoodList : {
      screen: FoodList, 
    },
    Haksik: {
      screen: HaksikMenu,
    },
    Dormitory: {
      screen: Dormitory,
    }
  }, {
    initialRouteName: 'FoodList',
    headerMode:'none',
  }
)

export default class FoodMainView extends Component {
  constructor(props) {
    super(props);
  }

  static router = FoodStack.router;

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff', size:normalize(20), onPress: ()=> {this.props.navigation.navigate("DrawerOpen")}, underlayColor: "rgba(0,0,0,0)"}}
          centerComponent={{ text: '뭐먹을까', style: { color: '#fff', fontSize: normalize(12), fontFamily:"NotoSansCJKkr-Thin" }}}
          outerContainerStyles={styles.headerStyle}
        />
        <FoodStack navigation={this.props.navigation} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    backgroundColor:'rgba(12,80,160,1)',
  },
})