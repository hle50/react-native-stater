/**
 * Created by nois on 8/23/17.
 */
import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

export default class ScreenTwo extends Component {


  constructor(props){
    super(props);
    console.log('PROPSSS', props)
  }

  render(){
    return (
      <View>
        <Text>Screen One</Text>
      </View>
    )
  }
}
