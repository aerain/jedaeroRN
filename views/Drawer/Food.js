import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Header } from 'react-native-elements';
import normalize from 'react-native-elements/src/helpers/normalizeText'

import FoodList from './FoodList/foodlist';
import HaksikTap from './FoodList/haksik'
import Dormitory from './FoodList/dormitory';


export default class FoodMainView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff', size:normalize(20), onPress: ()=> {this.props.navigation.navigate("DrawerOpen")}, underlayColor: "rgba(0,0,0,0)"}}
          centerComponent={{ text: '뭐먹을까', style: { color: '#fff', fontSize: normalize(12), fontFamily:"NotoSansCJKkr-Thin" }}}
          outerContainerStyles={styles.headerStyle}
        />
        <View style={{flex: 1}}>
          <FoodStack />
        </View>
      </View>
    )
  }
}

const FoodStack = StackNavigator(
  {
    FoodList : {
      screen: FoodList, 
    },
    Haksik: {
      screen: (props) => (
        <View style={{flex : 1, }}>
          <View elevation={2} style={{justifyContent: 'center', alignItems:'center', width: '100%', backgroundColor:'white' ,marginBottom:5}}>
            <Text style={{fontSize:normalize(16), fontFamily: "NotoSansCJKkr-Thin"}}>학식 메뉴</Text>
          </View>
          <HaksikTap />
        </View>
      ),
    },
    Dormitory: {
      screen: Dormitory,
    }
  }, {
    initialRouteName: 'FoodList',
    headerMode:'none',
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    backgroundColor:'rgba(12,80,160,1)',
  },
})