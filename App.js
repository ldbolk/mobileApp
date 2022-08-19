import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import Button from './app/components/Button';
import api from './app/lib/API.js';
import Content from './app/components/Content';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.okayClicked = this.okayClicked.bind(this) // Binds okayClicked to the App class
  }

  cancelClicked() {
    alert('Cancel clicked');
  }

  okayClicked() {
    var c = this.state.counter + 1;
    this.setState({
      counter: c
    })
  }

  apiClicked() {
    api.fetchData()
  }

  render() {
    const img = "https://picsum.photos/id/1025/4951/3301"
    
    return (
      <View style={{ marginTop: 80, padding: 20 }}>
        <Text># Clicks: {this.state.counter.toString()}</Text>

        <View
        style={{ marginTop: 20, padding: 20, flex: 1, flexDirection: 'row', justifyContent: 'center' }}
        >
          <Button text="Okay" action={ this.okayClicked }/>
          <Button text="Cancel" action={ this.cancelClicked }/>
          <TouchableOpacity
          onPress = { () => this.apiClicked()}
            style={{
                width: 120,
                height: 40,
                padding: 10,
                backgroundColor: '#CCC'
            }}>
            <Text style={{ textAlign: 'center', color: '#000'}}>API Call button</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 200, padding: 20 }}>
        <Image source={{uri: img}} style={{height:300, width: 300}}/>
        </View>
      </View>
    );
  }
}

export default App;