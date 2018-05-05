import React, { Component } from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { ListItem } from 'react-native-elements'

import Hansik from '../../../jsons/hansik'
import Chinese from '../../../jsons/etc'
import Chicken from '../../../jsons/chicken'

export default class etcList extends Component {
    render = () => {
        let Listing;
        switch (this.props.listed) {
            case 'korean':
                Listing = Hansik;
                break;
            case 'chinese':
                Listing = Chinese;
                break;
            case 'chicken':
                Listing = Chicken;
                break;
            default:
                break;

        }
        return (
            <ScrollView>
                {
                    Listing.map((l, i) => (
                        <ListItem
                            key={i}
                            title={l.name}
                            titleStyle={{fontFamily: "NotoSansCJKkr-Thin"}}
                            containerStyle={{backgroundColor: 'white', paddingLeft:20}}
                            onPress={()=>this.props.navigation.navigate('DetailsList',
                                {
                                    name: l.name,
                                    images: l.images,
                                    tel: l.tel,
                                }
                            )}
                            chevron
                            bottomDivider
                        />
                    ))
                }
            </ScrollView>
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
