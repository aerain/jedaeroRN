import React, { Component } from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import normalize from 'react-native-elements/src/helpers/normalizeText'
import listText from './listText';

export default class FoodList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const list = listText;
    return (
      <ScrollView>
        {
          list.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              subtitle={l.subtitle}
              titleStyle={styles.listTitleStyle}
              subtitleStyle={styles.listSubtitleStyle}
              containerStyle={styles.listContainerStyle}
              onPress={l._clickFood}
              underlayColor="rgba(0,0,0,0)"
              hideChevron={true}
              leftIcon={l.icon}
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
    fontWeight:'bold'
  },
  listSubtitleStyle: {
    textAlign:'center'
  },
  listContainerStyle: {
    paddingTop:20,
    paddingBottom:20,
  }
})