import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class ImageMini extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'white',
          paddingTop: 10,
          paddingLeft: 10,
          margin: 10,
          elevation: 1,
        }}>
        <Image
          source={this.props.imageUrl}
          style={{width: 130, height: 70, resizeMode: 'cover'}}
        />
        <Text style={{paddingVertical: 10, fontSize: 17}}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}
