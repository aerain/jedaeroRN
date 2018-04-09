import React, { Component } from 'react';
import { View, WebView, TouchableOpacity, Text } from 'react-native';

import normalize from 'react-native-elements/src/helpers/normalizeText'

import { NavigationActions } from 'react-navigation';

export default class SmartCheck extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        console.log(this);
        return (
            <View style={{flex:1}}>
                {/* <WebView source={{uri:'http://elearning.jejunu.ac.kr/'}} style={{flex:1}} /> */}
                <View style={{flex:1, backgroundColor:'black'}} />
                <TouchableOpacity
                    style={{position:'absolute', right:20, bottom:20,}}
                    onPress={() => this.props.screenProps.navigation.dispatch(NavigationActions.back())}
                >
                    <View style={{width:70, height:70, backgroundColor:'rgba(0,0,0,.75)', borderRadius:40, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:normalize(30), fontWeight:'bold', color:'rgba(255,255,255,1)'}}>{"←"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}