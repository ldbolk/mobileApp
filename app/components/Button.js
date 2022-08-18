import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends Component {

    handleClick() {
        this.props.action();
    }

    render() {
        return(
            <TouchableOpacity 
            onPress = { () => this.handleClick()}
            style={{
                width: 120,
                height: 40,
                padding: 10,
                backgroundColor: '#CCC'
            }}>
            <Text style={{ textAlign: 'center', color: '#000'}}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

export default Button;