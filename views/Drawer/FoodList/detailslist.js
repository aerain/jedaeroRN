import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class DetailsList extends Component {
    
    render() {
        let getParam = this.props.navigation.getParam;
        return (
            <View>
                <Text>Details Screen</Text>
                <Text>{getParam('name')}</Text>
                <Image 
                    style={{width:'100%', height:200}}
                    source={{uri: getParam('images')}}
                />
                <Text>{getParam('images')}</Text>
                <Text>{getParam('tel')}</Text>
            </View>
        );
    }
}