/**
 * 제대로 가자 메인 화면
 * 제작자 - 이청길
 * 제주대학교 학부생
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { StackNavigator, NavigationActions } from 'react-navigation';

import Main from './MainDrawer';
import SmartCheck from './SmartCheck';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const MainAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Main'})],
    })
    return (
      <View style={styles.container}>
        <Image 
          source={require('../images/logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.dispatch(MainAction)}>
            <Image
              source={require('../images/tip_button.png')}
              resizeMode="stretch"
              style={styles.button}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("eLearn")} >
            <Image
              source={require('../images/smart_button.png')}
              resizeMode="stretch"
              style={styles.button}
            />
          </TouchableOpacity>
        </View>
        <Image 
          source={require('../images/jeju_logo.png')}
          style={styles.jeju}
          resizeMode="stretch"
        />
      </View>
    );
  }
}

export default StackNavigator (
  {
    Home: {
      screen: Home,
    },
    Main : {
      screen : (props) => <Main />,
    },
    eLearn : {
      screen : (props) => <SmartCheck screenProps={props}/>,
    }
  },{
    navigationOptions: {
      header: null
    }
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.75)',
    padding: 20,
  },
  logo: {
    width: 280,
    height:100,
    marginBottom: 40,
  },
  button : {
    width: 80,
    height: 80
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 40,
    paddingLeft:20,
    paddingRight:20,
  },
  jeju: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width:50,
    height:75,
  }
});
