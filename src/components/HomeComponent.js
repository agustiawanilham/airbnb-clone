import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class HomeComponent extends Component {
  render() {
    const {imageUrl, title, description, price} = this.props;
    return (
      <View style={{marginBottom: 20}}>
        <Image
          source={imageUrl}
          style={{
            flex: 1,
            height: 100,
            width: 175,
            resizeMode: 'cover',
            paddingTop: 20,
          }}
        />
        <Text style={{fontSize: 15, color: 'red', fontWeight: '500'}}>
          {title}
        </Text>
        <Text>{description}</Text>
        <Text>{price}</Text>
      </View>
    );
  }
}
