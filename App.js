import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class App extends Component {

  render(){
    return(
      <View style={{flex:1, alignSelf: 'center', justifyContent: 'center'}}>
      <Text>Hello dari component</Text>
      </View>
    )
  }
}
