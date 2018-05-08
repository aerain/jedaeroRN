import React, { Component } from 'react';
import { ScrollView, StyleSheet, Alert, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import normalize from 'react-native-elements/src/helpers/normalizeText'
import menuList from './listText'

export default class FoodList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    listText = menuList(this);
    return (
      <ScrollView>
        {
          listText.map((item, key) => (
            <ListItem
              key={key}
              title={item.name}
              subtitle={item.subtitle}
              titleStyle={styles.listTitleStyle}
              subtitleStyle={styles.listSubtitleStyle}
              containerStyle={styles.listContainerStyle}
              onPress={item._clickFood}
              underlayColor="rgba(0,0,0,0)"
              hideChevron={true}
            />
          ))
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  listTitleStyle: {
    fontSize: normalize(20),
    textAlign:'center',
    fontFamily: 'NotoSansCJKkr-Regular',
    fontWeight: 'bold',
  },
  listSubtitleStyle: {
    textAlign:'center',
    fontFamily: "NotoSansCJKkr-Regular",
    fontSize: normalize(14)
  },
  listContainerStyle: {
    paddingTop:20,
    paddingBottom:5,
    marginBottom:10,
    backgroundColor:'white'
  }
})