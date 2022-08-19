import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Homepage from './app/views/Homepage';
import Detail from './app/views/Detail';

import Button from './app/components/Button';
import API from './app/lib/API.js';
import Content from './app/components/Content';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      timeout: false,
      data: []
    }
  }

  componentDidMount() {
    this.fetchData();
  }
  
  fetchData() {
    API.fetchData()
    .then(res => {
      this.setState({
        isLoaded: true,
        data: res
      })
    })
    .catch(err => {
      this.setState({
        timeout: true
      })
    })
  }


  renderContent() {
    if(this.state.isLoaded) {
      return(
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Homepage" component={ Homepage }/>
            <Stack.Screen name="Detail" component={ Detail }/>
          </Stack.Navigator>
        </NavigationContainer>
      )
    } if (this.state.timeout) {
      return(
        <Text style={{ fontSize: 22 }}>
          Timeout my dude
        </Text>
      )
    }

    return(
      <Text 
      style={{ fontSize: 22 }}>
        Spinner!
      </Text>  
    )
  }

  render() {
    const img = "https://picsum.photos/id/1025/4951/3301"
    
    return (
      <View>
      <View style={{ marginTop: 100, padding: 20 }}>
        { this.renderContent() }
        <View style={{ marginTop: 200, padding: 20 }}>
        <Image source={{uri: img}} style={{height:300, width: 300}}/>
        </View>
      </View>
    </View>
    );
  }
}
