import React, {Component} from 'react';
import {  Text, Header, Body, List, ListItem, Left, CheckBox } from 'native-base';

export default class TodoItem extends Component{
    render(){
        const{todo} = this.props;
        return (
            // kita buat props
            <ListItem >
            <Left>
                <CheckBox checked={false}/>
            </Left>
            {/* jangan lupa ditaruh lagi dalam body */}
            <Body>
                {/* setelah kita aliaskan todo, baru ambil array objectnya */}
                <Text>{todo.notodo}</Text>
            </Body>  
            </ListItem>

        )
    }
}