import React, {Component} from 'react';
import {Text, View} from 'react-native';

// import file sendiri dot slash
import Header from './components/Header';
import Body from './components/Body';

// cara panggil lebih simpel
// const color = this.props.color;
// const title = this.props.title;

export default ()=> (
    <View style={{flex:1, justifyContent:'center'}}>
      <Header title="My not list" color="yellow"/>
      {/* ngambil string title yang dapat di isi value tertentu */}
      <Body/>
    </View>
);
  
