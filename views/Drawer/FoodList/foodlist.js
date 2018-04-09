import React, { Component } from 'react';
import { ScrollView, StyleSheet, Alert, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import normalize from 'react-native-elements/src/helpers/normalizeText'

export default class FoodList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const listText = [
      {
        name: '신관',
        subtitle: '학생회관 밥',
        _clickFood: () => {
          this.props.navigation.navigate("Haksik")
        },
      },
      {
        name: '학생생활관',
        subtitle: '긱사 밥 노맛',
        _clickFood: () => {
          Alert.alert("끼야악");
        },
      },
      {
        name: '한식',
        subtitle: '갈비찜 존맛탱',
        _clickFood: () => {
          Alert.alert("끼야악");
        },
      },
      {
        name: '중•일•양식',
        subtitle: '짬뽕 존맛탱',
        _clickFood: () => {
          Alert.alert("끼야악");
        },
      },
      {
        name: '치킨',
        subtitle: '치킨은 양념이지',
        _clickFood: () => {
          Alert.alert("끼야악");
        },
      },
    ];
    return (
      <ScrollView>
        {
          listText.map((l, i) => (
            <View elevation={2} style={{margin:5, borderRadius:5}}>
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
              />
            </View>
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
    borderRadius:5,
  }
})