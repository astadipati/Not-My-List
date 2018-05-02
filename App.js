import React, {Component} from 'react';
import { Content, Container, Text, Header, Body, List, ListItem, Left, CheckBox } from 'native-base';

export default class App extends Component{

  todos =['First todo', 'Second todo', 'Third Todo'];
  render(){
    return(
      // didalam container wajib
      <Container>
        <Header>
          <Body>
            <Text>Not to do list</Text>
          </Body>
        </Header>
        <Content>
          <List>

            <ListItem>
              <Left>
                {/* <Text>v</Text> kita ganti dengan checkbox asli*/}
                <CheckBox checked={false}/>
              </Left>
              {/* jangan lupa ditaruh lagi dalam body */}
              <Body>
                <Text>First Item</Text>
              </Body>  
            </ListItem>
            <ListItem>

              <Left>
                {/* <Text>v</Text> kita ganti dengan checkbox asli*/}
                <CheckBox checked={true}/>
              </Left>
              {/* jangan lupa ditaruh lagi dalam body */}
              <Body>
                <Text>Second Item</Text>
              </Body>  
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
