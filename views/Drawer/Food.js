import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import { Header, ListItem } from 'react-native-elements';
import normalize from 'react-native-elements/src/helpers/normalizeText'

const list = [
  {
    name: '신관',
    subtitle: '학생회관 밥',
  },
  {
    name: '학생생활관',
    subtitle: '긱사 밥',
  },
  {
    name: '한식',
    subtitle: '갈비찜 존맛탱'
  },
  {
    name: '중•일•양식',
    subtitle: '짬뽕 존맛탱',
  },
  {
    name: '치킨',
    subtitle: '치킨은 양념이지',
  },
]


export default class Food extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff', size:normalize(30), onPress: ()=> {this.props.navigation.navigate("DrawerOpen")}, underlayColor: "rgba(0,0,0,0)"}}
          centerComponent={{ text: '뭐먹을까', style: { color: '#fff', fontSize: normalize(18), fontWeight: 'bold' }}}
          outerContainerStyles={styles.headerStyle}
        />
        <View>
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                title={l.name}
                subtitle={l.subtitle}
                titleStyle={styles.listTitleStyle}
                subtitleStyle={styles.listSubtitleStyle}
                onPress={() => 
                  {
                    Alert.alert("노렸잼.")
                  }
                }
                underlayColor="rgba(0,0,0,0)"
              />
            ))
          }
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    backgroundColor:'rgba(0,0,0,.8)'
  },
  listTitleStyle: {
    fontSize: normalize(20),
    textAlign:'center',
    fontWeight:'bold'
  },
  listSubtitleStyle: {
    textAlign:'center'
  }
})