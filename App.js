import React, {Component} from 'react';
import { Content, Container, Text, Header, Body, List, ListItem, Left, CheckBox } from 'native-base';
import {FlatList} from 'react-native';
import TodoItem from './components/TodoItem';
export default class App extends Component{

  todos =[
    {
      id: "1",
      notodo: "Makan"
    },
    {
      id: "2",
      notodo: "Mancing"
    },
    {
      id: "3",
      notodo: "Ngupil"
    },
  ];

  _keyExtractor = (item, index) => item.id;

  render(){
    return(
      // didalam container wajib
      <Container>
        <Header>
          <Body>
            <Text>Not to do list</Text>
          </Body>
        </Header>
        {/* end header */}
        {/* content */}
        <Content>
          <List>
            <FlatList
              data={this.todos}
              keyExtractor={this._keyExtractor}
              renderItem={({item})=> <TodoItem todo={item}/>}
            />
            {/* {this.todos.map((todo) =><TodoItem todo={todo} key={todo.id}/> )} */}
          </List>
        </Content>
      </Container>
    );
  }
}
