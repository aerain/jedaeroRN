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
  WebView
} from 'react-native';

import { createStackNavigator, NavigationActions } from 'react-navigation';

import normalize from 'react-native-elements/src/helpers/normalizeText'

import Main from './MainDrawer';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../images/logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
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

export default createStackNavigator (
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Main : {
      screen : Main,
      navigationOptions: {
        header: null
      }
    },
    eLearn : {
      screen : (props) => [
          <WebView source={{uri:'http://elearning.jejunu.ac.kr/'}} style={{flex:1}} />,
          <TouchableOpacity
              style={{position:'absolute', right:20, bottom:20,}}
              onPress={() => props.navigation.dispatch(NavigationActions.back())}
          >
              <View style={{width:70, height:70, backgroundColor:'rgba(0,0,0,.75)', borderRadius:40, justifyContent:'center', alignItems:'center'}}>
              <Text style={{fontSize:normalize(30), fontWeight:'bold', color:'rgba(255,255,255,1)'}}>{"←"}</Text>
              </View>
          </TouchableOpacity>  
      ],
      navigationOptions: {
        headerTitle: "스마트 출석",
        headerStyle: {backgroundColor:'rgba(12,80,160,1)', height: 45} ,
        headerTitleStyle: {
          fontWeight: 'normal',
          fontFamily: "NotoSansCJKkr-Thin",
          fontSize: normalize(12),
        },
        headerBackTitleStyle: {
          color:'white'
        },
        headerTintColor: 'white',
        gesturesEnabled: true,
      },
    }
  }, {
    headerMode: 'screen',
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(12,80,160,1)',
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
  },
});
