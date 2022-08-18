import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import Button from './app/components/Button';
import Content from './app/components/Content';

class App extends Component {

  cancelClicked() {
    alert('Cancel clicked');
  }

  okayClicked() {
    alert('Okay clicked');
  }

  render() {
    const img = "https://picsum.photos/id/1025/4951/3301"

    return (
      <View style={{ marginTop: 100, padding: 20 }}>

        <Content>
          <Image 
          source={{uri: img}}
          style={{ width: 200, height: 200, resizeMode: 'contain'}}
          />
          <Text
          style={{ color: '#000', textAlign: 'left', lineHeight: 20 }}
          >
            This is bio number 1
          </Text>
        </Content>

        <Content>
          <Text
          style={{ color: "#000", textAlign: 'left', lineHeight: 20 }}
          >
            This is biography number 2
          </Text>
        </Content>

        <View
        style={{ marginTop: 20, padding: 20, flex: 1, flexDirection: 'row', justifyContent: 'center'}}
        >  
          <Button text="Okay" action = { this.okayClicked }></Button>
          <Button text="Cancel" action = { this.cancelClicked }></Button>
        </View>
      </View>
    );
  }
}

export default App;