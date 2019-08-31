import React, { Component } from 'react'
import { View, Text, AppRegistry } from 'react-native'

export default class Propsis extends Component {
  render () {
    return (
      <View>
        <Text style={{ fontSize: 28, color: 'white' }}>{this.props.text}</Text>
      </View>
    )
  }
}
