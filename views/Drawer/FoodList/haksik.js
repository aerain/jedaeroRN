import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import normalize from 'react-native-elements/src/helpers/normalizeText';
import cheerio from 'react-native-cheerio';
import { TabNavigator } from 'react-navigation';

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
          <ActivityIndicator size={50} color='rgba(0,0,0,.75)'/>
        </View>
      ) 
    } else {
      return (
        <ScrollView style={styles.container}>
          <Text style={{fontSize:normalize(20), textAlign:'center'}}>
            {this.state.meal.combo}{"\r\n\r\n"}
            {this.state.meal.dinner}{"\r\n\r\n"}
            {this.state.meal.special}{"\r\n\r\n"}
            {this.state.meal.western}{"\r\n\r\n"}
            {this.state.meal.chinese}{"\r\n\r\n"}
          </Text>
        </ScrollView>
      )
    }
  }
}

export default HaksikTap = TabNavigator (
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
    tabBarPosition: 'bottom',
    lazy: false,
    backBehavior: 'none',
    tabBarOptions: {
      inactiveBackgroundColor: 'rgba(255,255,255,1)',
      activeBackgroundColor: "rgba(0,0,0,.75)",
      inactiveBackgroundColor: "rgba(255,255,255,1)",
      inactiveTintColor: "rgba(0,0,0,1)",
      tabStyle: {
        backgroundColor:"rgba(0,0,0,.75)",
      },
      labelStyle: {
        fontSize: normalize(18),
        fontWeight: 'bold',
        
      },
      style: {
        backgroundColor:'rgba(255,255,255,1)'
      },  
      renderIndicator: () => null
    },
    
  }
);

let styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:20,
  },
  title: {
    justifyContent:'center',
    alignItems:'center'
  }
})