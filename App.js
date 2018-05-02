import React, {Component} from 'react';
import { Content, Container, Text, Header, Body, List, ListItem, Left, CheckBox } from 'native-base';

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
            {/* loop dimari pakai simple es6 ngambil nilai array todos yang dilempar ke objek baru todo*/}
            {/* dan selanjutnya dilempar ke view text */}
            {this.todos.map((todo) =>(
              // jangan lupa key untuk menghilangkan error, karena parameter ini harus terdeteksi unik ketika di loop
              <ListItem key={todo.id}>
                <Left>
                  {/* <Text>v</Text> kita ganti dengan checkbox asli*/}
                  <CheckBox checked={false}/>
                </Left>
                {/* jangan lupa ditaruh lagi dalam body */}
                <Body>
                  {/* setelah kita aliaskan todo, baru ambil array objectnya */}
                  <Text>{todo.notodo}</Text>
                </Body>  
              </ListItem>
            ))}

          </List>
        </Content>
      </Container>
    );
  }
}
