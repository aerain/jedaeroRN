import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import normalize from 'react-native-elements/src/helpers/normalizeText';
import cheerio from 'react-native-cheerio';
import { createBottomTabNavigator,  AuthenticationNavigator } from 'react-navigation';

class Haksik extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  componentDidMount = () => this.haksikCrawl(); // componentDidMount는 클래스 접근했을때 바로 실행되는거

  haksikCrawl = async () => {
    try {
      let uri = 'http://www.jejunu.ac.kr/camp/stud/foodmenu'
      let response = await fetch(uri);
      let bodyHtml = await response.text();
      let $ = cheerio.load(bodyHtml);
  
      {
          strjson = '{ "title" : "백두관 식당", ';
          countday = 1;
          countmenu = 1;
          $('.table.border_left.border_top_blue > tbody > tr > td > p').each(function() {
              strjson += '"baekdu' + countday + "_" + countmenu + '" : "' + $(this).text() + '", ';
              countmenu++;
              if (countmenu % 9 === 0){
              countmenu = 1;
              countday++;
              }
          });
          strjson += '"blank" : ""}';
          strjson = strjson.replace(/\n/gi, '\\r\\n');
          
          data = JSON.parse(strjson);

          switch (this.props.DoW) {
            case "mon":
              this.setState({
                meal: {
                  combo : data.baekdu1_1,
                  dinner : data.baekdu1_2,
                  special: data.baekdu1_3,
                  western: data.baekdu1_5,
                  chinese : data.baekdu1_7,
                }
              })
              break;
            case "tue":
              this.setState({
                meal: {
                  combo : data.baekdu2_1,
                  dinner : data.baekdu2_2,
                  special: data.baekdu2_3,
                  western: data.baekdu2_5,
                  chinese : data.baekdu2_7,
                }
              })
              break;
            case "wed":
              this.setState({
                meal: {
                  combo : data.baekdu3_1,
                  dinner : data.baekdu3_2,
                  special: data.baekdu3_3,
                  western: data.baekdu3_5,
                  chinese : data.baekdu3_7,
                }
              })
              break;
            case "thu":
              this.setState({
                meal: {
                  combo : data.baekdu4_1,
                  dinner : data.baekdu4_2,
                  special: data.baekdu4_3,
                  western: data.baekdu4_5,
                  chinese : data.baekdu4_7,
                }
              })
                break;
            case "fri":
              this.setState({
                meal: {
                  combo : data.baekdu4_8,
                  dinner : data.baekdu5_1,
                  special: data.baekdu5_2,
                  western: data.baekdu5_4,
                  chinese : data.baekdu5_6,
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
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={50} color='rgba(12,80,160,1)'/>
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
      <View elevation={1} style={styles.list}>
        <View style={styles.foodlistContainer}>
          <Text style={styles.foodlistTitle}>{this.props.title}</Text>
        </View>
        <Text style={styles.foodlist}>{this.props.food}</Text>
      </View>
    )
  }
}

export default HaksikTap = createBottomTabNavigator (
  {
    Mon : {
      screen : (props) => <Haksik DoW="mon" />,
      navigationOptions: {
        title: "월"
      }
    },
    Tue : {
      screen : (props) => <Haksik DoW="tue" />,
      navigationOptions: {
        title: "화"
      }
    },
    Wed : {
      screen : (props) => <Haksik DoW="wed" />,
      navigationOptions: {
        title: "수"
      }
    },
    Thu : {
      screen : (props) => <Haksik DoW="thu" />,
      navigationOptions: {
        title: "목"
      }
    },
    Fri : {
      screen : (props) => <Haksik DoW="fri" />,
      navigationOptions: {
        title: "금"
      }
    }
  }, {
    lazy: false,
    backBehavior: 'none',
    tabBarOptions: {
      activeTintColor: "rgba(12,80,160,1)",
      inactiveBackgroundColor: "white",
      activeBackgroundColor:'rgba(12,80,160,1)',
      inactiveTintColor: 'black',
      labelStyle: {
        fontSize: normalize(18),
        fontFamily: 'NotoSansCJKkr-Thin'
      }, 
      style: {
        backgroundColor:'white'
      },
      renderIndicator: () => null
    },
    
  }
);

let styles = StyleSheet.create({
  container: {
    flex:1,
  },
  title: {
    justifyContent:'center',
    alignItems:'center'
  },
  foodlist: {fontSize:normalize(16), textAlign:'center', fontFamily:'NotoSansCJKkr-Thin'},
  foodlistContainer: {
    backgroundColor:'rgba(12,80,160,1)',
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
  foodlistTitle: {
    textAlign:'center',
    fontSize: normalize(20),
    fontFamily: 'NotoSansCJKkr-Thin',
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