import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Header extends Component{
    render(){
        // definisikan dulu jenis 2 props
        // const color = this.props.color;
        // const title = this.props.title;
        // cara paling simple pakai es6
        const{color, title} = this.props; //menjadikan sebagai object
        return(
        <View style={{backgroundColor: color}}>
        {/* karena color sudah berupa object beda dengan title */}
            <Text>{title}</Text> 
            {/* props nya melempar title harus berupa object */}
        </View>
        );
    }
}