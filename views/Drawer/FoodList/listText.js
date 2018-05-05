import React from 'react';

let listText = (call) => {
  let list = [
    {
      key: 'haksik',
      name: '신관',
      subtitle: '학생회관 밥',
      _clickFood: () => {
        call.props.navigation.navigate("Haksik")
      },
    },
    {
      key: 'dormitory',
      name: '학생생활관',
      subtitle: '긱사 밥 노맛',
      _clickFood: () => {
        call.props.navigation.navigate("Dormitory")
      },
    },
    {
      key: 'korean',
      name: '한식',
      subtitle: '갈비찜 존맛탱',
      _clickFood: () => {
        call.props.navigation.navigate("Korean")
      },
    },
    {
      key: 'foreign',
      name: '중•일•양식',
      subtitle: '짬뽕 존맛탱',
      _clickFood: () => {
        call.props.navigation.navigate("Chinese")
      },
    },
    {
      key: 'chicken',
      name: '치킨',
      subtitle: '치킨은 양념이지',
      _clickFood: () => {
        call.props.navigation.navigate("Chicken")
      },
    },
  ]
  return list;
}

export default listText;