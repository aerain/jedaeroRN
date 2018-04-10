import React, { Component } from 'react';
import { View, Text } from 'react-native';
import normalize from 'react-native-elements/src/helpers/normalizeText'
import { createTabNavigator } from 'react-navigation'
import cheerio from 'react-native-cheerio'
import iconv from 'iconv-lite'

class Dorm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount = () => this.DormCrawl();

  DormCrawl = async () => {
    try {
      let uri = 'http://dormitory.neo-internet.co.kr/board/adm/Recipe/restaurant.php'
      let response = await fetch(uri);
      let bodyHtml = await response.text();

      bodyHtml = iconv('euc-kr', 'utf-8', bodyHtml);

      let $ = cheerio.load(bodyHtml);

      console.log(bodyHtml);
  
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

          console.log(data);

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

  render() {
    return (
      <View>
        <Text>
          스택테스트
        </Text>
      </View>
    )
  }
}

export default DormTap = createTabNavigator (
  {
    Mon : {
      screen : (props) => <Dorm DoW="mon" />,
      navigationOptions: {
        title: "월"
      }
    },
    Tue : {
      screen : (props) => <Dorm DoW="tue" />,
      navigationOptions: {
        title: "화"
      }
    },
    Wed : {
      screen : (props) => <Dorm DoW="wed" />,
      navigationOptions: {
        title: "수"
      }
    },
    Thu : {
      screen : (props) => <Dorm DoW="thu" />,
      navigationOptions: {
        title: "목"
      }
    },
    Fri : {
      screen : (props) => <Dorm DoW="fri" />,
      navigationOptions: {
        title: "금"
      }
    }
  }, {
    tabBarPosition: 'bottom',
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