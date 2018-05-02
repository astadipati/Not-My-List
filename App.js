import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from './components/Header';
import Body from './components/Body';

export default class App extends Component{
  render(){
    return(
      // didalam container ada header dan body
      <View style={styles.container}>
        <View style={styles.header}>
        <Text>Header</Text>
        </View>
        <View style={styles.body}>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <View style={styles.listItemLeft}>
              <Text>v1</Text>
            </View>
            <View style={styles.listItemRight}>
              <Text>First Item</Text>
            </View>
          </View>
          <View style={styles.listItem}>
            <View style={styles.listItemLeft}>
              <Text>v2</Text>
            </View>
            <View style={styles.listItemRight}>
              <Text>Second Item</Text>
            </View>
          </View>
        </View>
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
  },
  listItem:{
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff'
  },
  listItemLeft: {
    flex:1
  },
  listItemRight:{
    flex:9
}
});