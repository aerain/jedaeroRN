import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView, Alert } from 'react-native';
import normalize from 'react-native-elements/src/helpers/normalizeText';
import { createBottomTabNavigator } from 'react-navigation';
import cheerio from 'react-native-cheerio'
import { Iconv } from 'iconv-lite'

class Dorm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount = () => this.DormCrawl();

  DormCrawl = async () => {
    let uri = 'http://dormitory.neo-internet.co.kr/board/adm/Recipe/restaurant.php'
    let req = new XMLHttpRequest();
    req.open('GET', uri, true);
    req.responseType = 'text';
    req.setRequestHeader("User-Agent", "KHTML, like Gecko");
    req.setRequestHeader("Content-Type", "text/html; charset=CP949");
    req.onreadystatechange = () => {
      if(req.readyState == 4 && req.status == 200) {
        let $ = cheerio.load(req.responseText);
        console.log(req.responseText);
        {
            strjson = '{ "title" : "기숙사 생활관 식당", ';
            countday = 0;
            countmenu = 0;
            $('.wanted > tbody > tr > td').each(function() {
              strjson += '"dormitory' + countday + '_' + countmenu + '" : "' + $(this).text() + '", ';
              countmenu++;
              if (countmenu % 6 === 0){
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
                    dawn : data.dormitory1_1,
                    breakfast : data.dormitory1_2,
                    lunch: data.dormitory1_3,
                    dinner: data.dormitory1_4,
                  }
                })
                break;
              case "tue":
                this.setState({
                  meal: {
                    dawn : data.dormitory2_1,
                    breakfast : data.dormitory2_2,
                    lunch: data.dormitory2_3,
                    dinner: data.dormitory2_4,
                  }
                })
                break;
              case "wed":
                this.setState({
                  meal: {
                    dawn : data.dormitory3_1,
                    breakfast : data.dormitory3_2,
                    lunch: data.dormitory3_3,
                    dinner: data.dormitory3_4,
                  }
                })
                break;
              case "thu":
                this.setState({
                  meal: {
                    dawn : data.dormitory4_1,
                    breakfast : data.dormitory4_2,
                    lunch: data.dormitory4_3,
                    dinner: data.dormitory4_4,
                  }
                })
                  break;
              case "fri":
                this.setState({
                  meal: {
                    dawn : data.dormitory5_1,
                    breakfast : data.dormitory5_2,
                    lunch: data.dormitory5_3,
                    dinner: data.dormitory5_4,
                  }
                })
                break;
                case "sat":
                this.setState({
                  meal: {
                    dawn : data.dormitory6_1,
                    breakfast : data.dormitory6_2,
                    lunch: data.dormitory6_3,
                    dinner: data.dormitory6_4,
                  }
                })
                break;
                case "sun":
                this.setState({
                  meal: {
                    dawn : data.dormitory7_1,
                    breakfast : data.dormitory7_2,
                    lunch: data.dormitory7_3,
                    dinner: data.dormitory7_4,
                  }
                })
                break;
            }
          }
        }
    }
    req.send();  
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
          <DormList title="조기" food={this.state.meal.dawn}/>
          <DormList title="아침" food={this.state.meal.breakfast}/>
          <DormList title="점심" food={this.state.meal.lunch}/>
          <DormList title="저녁" food={this.state.meal.dinner}/>
        </ScrollView>
      )
    }
  }
}

class DormList extends Component {
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

let DormTap = createBottomTabNavigator (
  {
    dormMon : {
      screen : (props) => <Dorm DoW="mon" />,
      navigationOptions: {
        title: "월"
      }
    },
    dormTue : {
      screen : (props) => <Dorm DoW="tue" />,
      navigationOptions: {
        title: "화"
      }
    },
    dormWed : {
      screen : (props) => <Dorm DoW="wed" />,
      navigationOptions: {
        title: "수"
      }
    },
    dormThu : {
      screen : (props) => <Dorm DoW="thu" />,
      navigationOptions: {
        title: "목"
      }
    },
    dormFri : {
      screen : (props) => <Dorm DoW="fri" />,
      navigationOptions: {
        title: "금"
      }
    },
    dormSat : {
      screen : (props) => <Dorm DoW="sat" />,
      navigationOptions: {
        title: "토"
      }
    },
    dormSun : {
      screen : (props) => <Dorm DoW="sun" />,
      navigationOptions: {
        title: "일"
      }
    }
  }, {
    backBehavior: 'none',
    tabBarOptions: {
      activeTintColor: "white",
      activeBackgroundColor:'rgba(12,80,160,1)',
      labelStyle: {
        fontSize: normalize(16),
        fontFamily: 'NotoSansCJKkr-Thin'
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
  static router = DormTap.router;

  render = () => {
    return <DormTap navigation={this.props.navigation} />
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