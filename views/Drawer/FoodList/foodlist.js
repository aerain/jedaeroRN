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
        key: 'haksik',
        name: '신관',
        subtitle: '학생회관 밥',
        _clickFood: () => {
          this.props.navigation.navigate("Haksik")
        },
      },
      {
        key: 'dormitory',
        name: '학생생활관',
        subtitle: '긱사 밥 노맛',
        _clickFood: () => {
          this.props.navigation.navigate("Dormitory")
        },
      },
      {
        key: 'korean',
        name: '한식',
        subtitle: '갈비찜 존맛탱',
        _clickFood: () => {
          Alert.alert("끼야악");
        },
      },
      {
        key: 'foreign',
        name: '중•일•양식',
        subtitle: '짬뽕 존맛탱',
        _clickFood: () => {
          Alert.alert("끼야악");
        },
      },
      {
        key: 'chicken',
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
            <View key={i} elevation={2} style={{marginBottom:10, backgroundColor:'white'}}>
              <ListItem
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
    fontFamily: 'NotoSansCJKkr-Thin',
    fontWeight: 'bold',
  },
  listSubtitleStyle: {
    textAlign:'center',
    fontFamily: "NotoSansCJKkr-Thin",
    fontSize: normalize(14)
  },
  listContainerStyle: {
    paddingTop:20,
    paddingBottom:5,
  }
})