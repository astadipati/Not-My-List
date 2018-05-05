import React, {Component} from 'react';
import { Content, Container, Text, Header, Body, List, ListItem, Left, Fab, Icon, CheckBox } from 'native-base';
import {FlatList} from 'react-native';
import TodoItem from './components/TodoItem';
export default class App extends Component{

  constructor(){
    super();
    this.state ={
      count:0,
      todos:[]
    };
  }


  _keyExtractor = (item, index) => item.id;
  handleTambah(){
    let count = this.state.count + 1;
    let todos = this.state.todos;
    todos.push({
      id: count,
      todo: "First todos #" + count
    });

    this.setState({
      todos: todos,
      count:count
    });
  }

  render(){
    return(
      // didalam container wajib
      <Container>
        <Header>
          <Body>
            <Text>Not to do list ({this.state.count})</Text>
          </Body>
        </Header>
        {/* end  header */}
        {/* content */}
        <Content>
          <List>
            {this.state.todos.map((todo) =><TodoItem todo={todo} key={todo.id}/> )}
          </List>
        </Content>
        {/* pastikan fab berada di luar kontent */}
        <Fab
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.handleTambah()}>
            <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}
