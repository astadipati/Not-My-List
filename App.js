import React, {Component} from 'react';
import { Content, Container, Text, Header, Body, List, ListItem, Left, CheckBox } from 'native-base';
import TodoItem from './components/TodoItem';
export default class App extends Component{

  todos =[
    {
      id: "1",
      notodo: "First Not todo"
    },
    {
      id: "2",
      notodo: "Second Not todo"
    },
    {
      id: "3",
      notodo: "Third Not todo"
    },
  ];



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
            {this.todos.map((todo) =><TodoItem todo={todo} key={todo.id}/> )}
          </List>
        </Content>
      </Container>
    );
  }
}
