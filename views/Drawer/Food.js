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
          leftComponent={{ icon: 'menu', color: '#fff', size:normalize(30), onPress: ()=> {this.props.navigation.navigate("DrawerOpen")}, underlayColor: "rgba(0,0,0,0)"}}
          centerComponent={{ text: '뭐먹을까', style: { color: '#fff', fontSize: normalize(18), fontWeight: 'bold' }}}
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
        <View style={{flex : 1, paddingTop:20}}>
          <View style={{justifyContent: 'center', alignItems:'center'}}>
            <Text style={{fontSize:normalize(30), fontWeight:'bold'}}>학식 메뉴</Text>
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
    backgroundColor:'rgba(12,80,160,1)'
  },
})