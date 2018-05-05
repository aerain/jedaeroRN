import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class etcList extends Component {
    render = () => {
        return (
            <View style={styles.View}>
                <Text>{this.props.menu} Empty View</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    View : {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    }
})
