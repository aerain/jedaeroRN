import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Header } from 'react-native-elements';
import normalize from 'react-native-elements/src/helpers/normalizeText'

import FoodList from './FoodList/foodlist';
import HaksikTab from './FoodList/haksik'
import DormTab from './FoodList/dormitory';
import Etcetra from './FoodList/etc';
import DetailsList from './FoodList/detailslist'

const FoodStack = createStackNavigator(
  {
    FoodList : {
      screen: FoodList,
      navigationOptions: {
        header:null
      }
    },
    Haksik: {
      screen: HaksikTab,
      navigationOptions: {
        headerTitle: "백두관 식당",
      }
    },
    Dormitory: {
      screen: DormTab,
      navigationOptions: {
        headerTitle: "기숙사 식당"
      }
    },
    Korean: {
      screen: props => <Etcetra navigation={props.navigation} listed="korean" />,
      navigationOptions: {
        headerTitle: "한식"
      }
    },
    Chinese: {
      screen: props => <Etcetra navigation={props.navigation} listed="chinese" />,
      navigationOptions: {
        headerTitle: "중,일,양식"
      }
    },
    Chicken: {
      screen: props => <Etcetra navigation={props.navigation} listed="chicken" />,
      navigationOptions: {
        headerTitle: "치킨"
      }
    },
    DetailsList: {
      screen: DetailsList,
      navigationOptions: (props) => {
        return {
          headerTitle: props.navigation.getParam('name', '바부또비니')
        }
      }
    }
  }, {
    initialRouteName: 'FoodList',
    backBehavior: 'initialRoute',
    headerMode:'float',
    headerTransitionPreset: 'uikit',
    navigationOptions: {
      headerTintColor:'white',
      headerTitleStyle: {
        fontSize:normalize(14),
        textAlign:'center',
        fontFamily:'NotoSansCJKkr-Regular',
        fontWeight:'normal'
      },
      headerStyle: {
        backgroundColor:'rgba(12,80,160,1)'
      },
    }
  }
)

export default class FoodMainView extends Component {
  static router = FoodStack.router;
  constructor(props) {
    super(props);
  }
  render() {
    return [
      <Header
        leftComponent={{ icon: 'menu', color: '#fff', size:normalize(20), onPress: ()=> {this.props.navigation.openDrawer()}, underlayColor: "rgba(0,0,0,0)"}}
        centerComponent={{ text: '뭐먹을까', style: { color: '#fff', fontSize: normalize(12), fontFamily:"NotoSansCJKkr-Regular" }}}
        outerContainerStyles={styles.headerStyle}
        key="header"
      />,
      <FoodStack navigation={this.props.navigation} key="foodstack" />
    ]
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    backgroundColor:'rgba(12,80,160,1)',
    borderBottomWidth:0,
  },
})