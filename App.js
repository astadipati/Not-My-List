import React, {Component} from 'react';
import {Text, View} from 'react-native';

// import file sendiri dot slash
import Header from './components/Header';
import Body from './components/Body';

// cara panggil lebih simpel


export default ()=> (
    <View style={{flex:1, justifyContent:'center'}}>
    {/* jika props yang diambil berupa string atau boolean harus jadi object dulu*/}
      <Header title={1} color="yellow"/>
      {/* ngambil string title yang dapat di isi value tertentu */}
      <Body/>
    </View>
);
  
