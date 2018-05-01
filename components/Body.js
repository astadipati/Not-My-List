import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Body extends Component{
    render(){
        return(
            <View style={{backgroundColor: '#EC463E'}}>
                <Text>Ini Body untuk props</Text>
            </View>
        );
    }
}