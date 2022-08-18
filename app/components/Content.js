import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Content extends Component {

    render() {

        return(
            <View 
            style=
            {{
                margin: 10,
                height: 250,
                padding: 20,
                backgroundColor: 'rgba(0,0,0,0.2)'
            }}>
                {this.props.children}
            </View>
        )
    }
}