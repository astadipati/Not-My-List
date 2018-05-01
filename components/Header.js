import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Header extends Component{

    render(){
        return(
        <View style={{backgroundColor: this.props.color}}>
            <Text>{this.props.title}</Text> 
            {/* props nya melempar title */}
        </View>
        );
    }
}