import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from './components/Header';
import Body from './components/Body';

export default class App extends Component{
  render(){
    return(
      // didalam container ada header dan body
      <View style={styles.container}>
        <View style={styles.header
        }>
        <Text>Header</Text>
        </View>
        <View style={styles.body
        }>
        <Text>Body</Text>
        </View>

        <Body/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  header: {
    backgroundColor: '#D0D0D0',
    flex: 1
  },
  body: {
    backgroundColor: '#EC463E',
    flex:5
  }
});