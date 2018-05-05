import React, {Component} from 'react';
import { Content, Container, Text, Header, Body, List, ListItem, Left, Fab, Icon, CheckBox } from 'native-base';
import {FlatList} from 'react-native';
import TodoItem from './components/TodoItem';
export default class App extends Component{

  state ={
    count:0
  }

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
      notodo: "Ngupi"
    },
    {
      id: "4",
      notodo: "Nyatai"
    }
  ];

  _keyExtractor = (item, index) => item.id;
  handleTambah(){
    this.setState({
      // count: 3
      count: this.state.count +1
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
