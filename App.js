import React, {Component} from 'react';
import {View , Text, TouchableOpacity} from 'react-native';

export default class App extends Component{

  // buat fungsi touchable
  handleClick(){
    alert('Ke Klik !!!')
  }

  render(){
    return(
      <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
        <TouchableOpacity
          onPress={()=> this.handleClick()}
          style={{backgroundColor: '#D0D0D0', padding:15}}
        >
          <Text>Click Me !</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
