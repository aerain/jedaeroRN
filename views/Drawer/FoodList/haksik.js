import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import normalize from 'react-native-elements/src/helpers/normalizeText';
import cheerio from 'react-native-cheerio';
import { createBottomTabNavigator, NavigationActions } from 'react-navigation';
import RNFetchBlob from 'react-native-fetch-blob'


class Haksik extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount = () => this.haksikCrawl(); // componentDidMount는 클래스 접근했을때 바로 실행되는거

  haksikCrawl = async () => {
    let uri = 'http://www.jejunu.ac.kr/camp/stud/foodmenu'
    try {
      let res = await RNFetchBlob.fetch('GET', uri);
      let $ = cheerio.load(res.text());
        {
          strjson = '{ "title" : "백두관 식당", ';
          countday = 1;
          countmenu = 1;
          $('.table.border_left.border_top_blue > tbody > tr > td').each(function() {
              TempText = $(this).text()
              TempText = TempText.substring(1); // CRLF 제거
              TempText = TempText.trim(); // 빈 공백 제거

              strjson += '"baekdu' + countday + "_" + countmenu + '" : "' + TempText + '", ';
              countmenu++;
              if (countmenu % 14 === 0){
              countmenu = 1;
              countday++;
              }
          });
          strjson += '"blank" : ""}';
          strjson = strjson.replace(/\n/gi, '\\r\\n');

          data = JSON.parse(strjson);

          console.log(data);

          switch (this.props.DoW) {
            case "mon":
              this.setState({
                meal: {
                  combo : data.baekdu1_3,
                  dinner : data.baekdu1_4,
                  special: data.baekdu1_6,
                  western: data.baekdu1_9,
                  chinese : data.baekdu1_12,
                }
              })
              break;
            case "tue":
              this.setState({
                meal: {
                  combo : data.baekdu2_3,
                  dinner : data.baekdu2_4,
                  special: data.baekdu2_6,
                  western: data.baekdu2_9,
                  chinese : data.baekdu2_12,
                }
              })
              break;
            case "wed":
              this.setState({
                meal: {
                  combo : data.baekdu3_3,
                  dinner : data.baekdu3_4,
                  special: data.baekdu3_6,
                  western: data.baekdu3_9,
                  chinese : data.baekdu3_12,
                }
              })
              break;
            case "thu":
              this.setState({
                meal: {
                  combo : data.baekdu4_3,
                  dinner : data.baekdu4_4,
                  special: data.baekdu4_6,
                  western: data.baekdu4_9,
                  chinese : data.baekdu4_12,
                }
              })
                break;
            case "fri":
              this.setState({
                meal: {
                  combo : data.baekdu5_3,
                  dinner : data.baekdu5_4,
                  special: data.baekdu5_6,
                  western: data.baekdu5_9,
                  chinese : data.baekdu5_12,
                }
              })
              break;
          }
        }
    } catch (error) {
      console.error(error);
    }
  }


  render = () => {
    if(!this.state.meal) {
      return (
        <View style={{alignItems: 'center', paddingTop:20}}>
          <ActivityIndicator size={35} color='rgba(12,80,160,1)'/>
        </View>
      )
    } else {
      return (
        <ScrollView style={styles.container}>
          <HaksikList title="정식" food={this.state.meal.combo}/>
          <HaksikList title="특식" food={this.state.meal.special}/>
          <HaksikList title="양식" food={this.state.meal.western}/>
          <HaksikList title="중식" food={this.state.meal.chinese}/>
          <HaksikList title="정식 저녁" food={this.state.meal.dinner}/>
        </ScrollView>
      )
    }
  }
}

class HaksikList extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.list} activeOpacity={0.8}>
        <View elevation={2} style={styles.foodlistContainer}>
          <Text style={styles.foodlistTitle}>{this.props.title}</Text>
        </View>
        <Text style={styles.foodlist}>{this.props.food}</Text>
      </TouchableOpacity>
    )
  }
}

let HaksikTap = createBottomTabNavigator (
  {
    Mon : {
      screen : (props) => <Haksik DoW="mon" navigation={props.navigation}/>,
      navigationOptions: {
        title: "월"
      }
    },
    Tue : {
      screen : (props) => <Haksik DoW="tue" navigation={props.navigation}/>,
      navigationOptions: {
        title: "화"
      }
    },
    Wed : {
      screen : (props) => <Haksik DoW="wed" navigation={props.navigation}/>,
      navigationOptions: {
        title: "수"
      }
    },
    Thu : {
      screen : (props) => <Haksik DoW="thu" navigation={props.navigation}/>,
      navigationOptions: {
        title: "목"
      }
    },
    Fri : {
      screen : (props) => <Haksik DoW="fri" navigation={props.navigation}/>,
      navigationOptions: {
        title: "금"
      }
    }
  }, {
    backBehavior: 'none',
    tabBarOptions: {
      activeTintColor: "white",
      activeBackgroundColor: 'rgba(12,80,160,1)',
      labelStyle: {
        fontSize: normalize(16),
        fontFamily: 'NotoSansCJKkr-Regular'
      }, 
      style: {
        backgroundColor:'white'
      },
    },
    
  }
);

export default class print extends Component {
  constructor(props) {
    super(props);
  }
  static router = HaksikTap.router;

  render = () => {
    return <HaksikTap navigation={this.props.navigation} />
  }
}

let styles = StyleSheet.create({
  container: {
    flex:1,
  },
  title: {
    justifyContent:'center',
    alignItems:'center'
  },
  foodlist: {fontSize:normalize(16), textAlign:'center', fontFamily:'NotoSansCJKkr-Regular'},
  foodlistContainer: {
    backgroundColor:'rgba(12,80,160,1)',
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
  foodlistTitle: {
    textAlign:'center',
    fontSize: normalize(20),
    fontFamily: 'NotoSansCJKkr-Regular',
    color:'white'
  },
  list: {
    marginLeft:10,
    marginRight: 10,
    marginTop:5,
    marginBottom:5,
    backgroundColor:'white',
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  }
})