import React, { Component } from 'react';
import { ScrollView, View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import ScaledImage from 'react-native-scaled-image';
import { normalize } from 'react-native-elements';

import call from 'react-native-phone-call';

export default class DetailsList extends Component {
    render = () => {
        let getParam = this.props.navigation.getParam;
        let telNum = () => {
            let telComponent;
            if(getParam('tel') !== "") {
                telComponent = (
                    <TouchableOpacity onPress={() => {
                        call({
                            number: '01023093537',
                            prompt: false,
                        }).catch(console.error)
                    }}>
                        <Text style={[{ fontSize: normalize(30), }, styles.textView]}>
                            {getParam('tel')}
                        </Text>
                    </TouchableOpacity>
                )
            } else {
                telComponent = (
                    <TouchableOpacity>
                        <Text style={[{ fontSize: normalize(30), }, styles.textView]}>
                            전화 없음
                        </Text>
                    </TouchableOpacity>
                )
            }
            return telComponent;
        }
        return (
            <ScrollView>
                <View style={{padding:10, backgroundColor:'white', marginTop:20, marginBottom:20, justifyContent:'center', alignItems: 'center'}}>
                    <Text style={[{fontSize:normalize(20)}, styles.textView]}>{getParam('name')}</Text>
                    <ScaledImage 
                        width={(Dimensions.get('window').width - 10)}
                        source={{uri: getParam('images')}}
                    />
                    { telNum() }
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    textView: {
        fontFamily: 'NotoSansCJKkr-Bold', color: 'rgba(12, 80, 160, 1)'
    }
})