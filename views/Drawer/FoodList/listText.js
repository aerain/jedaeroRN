import React from 'react';
import { Avatar } from 'react-native-elements';

export default listText = [
  {
    name: '신관',
    subtitle: '학생회관 밥',
    _clickFood: () => {
      this.props.navigation.navigate("Haksik");
    },
    icon: (
      <Avatar 
        medium
        source={require('../../../images/rice.png')}
        overlayContainerStyle={{backgroundColor: 'rgba(0,0,0,0)'}}
      />
    )
  },
  {
    name: '학생생활관',
    subtitle: '긱사 밥',
    _clickFood: () => {
      this.props.navigation.navigate("Dormitory");
    },
    icon: (
      <Avatar 
        medium
        source={require('../../../images/rice.png')}
        overlayContainerStyle={{backgroundColor: 'rgba(0,0,0,0)'}}
      />
    )
  },
  {
    name: '한식',
    subtitle: '갈비찜 존맛탱',
    _clickFood: () => {
      Alert.alert("끼야악");
    },
    icon: (
      <Avatar 
        medium
        source={require('../../../images/rice.png')}
        overlayContainerStyle={{backgroundColor: 'rgba(0,0,0,0)'}}
      />
    )
  },
  {
    name: '중•일•양식',
    subtitle: '짬뽕 존맛탱',
    _clickFood: () => {
      Alert.alert("끼야악");
    },
    icon: (
      <Avatar 
        medium
        source={require('../../../images/rice.png')}
        overlayContainerStyle={{backgroundColor: 'rgba(0,0,0,0)'}}
      />
    )
  },
  {
    name: '치킨',
    subtitle: '치킨은 양념이지',
    _clickFood: () => {
      Alert.alert("끼야악");
    },
    icon: (
      <Avatar 
        medium
        source={require('../../../images/rice.png')}
        overlayContainerStyle={{backgroundColor: 'rgba(0,0,0,0)'}}
      />
    )
  },
]