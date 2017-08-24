/**
 * Created by nois on 8/23/17.
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {
  Button
} from 'react-native-elements';
import { connect } from 'react-redux';
import SideMenu from 'react-native-side-menu';
class LoginScreen extends Component {


  render() {
    const { container } = styles;
    const Menu = <View style={{ flex: 1, backgroundColor: 'blue' }}><Text>Menu ne</Text></View>
    return (
      <SideMenu isOpen={false} menu={Menu}>
        <View style={container}>
          <Button
            large
            iconRight
            icon={{ name: 'code' }}
            title='LARGE WITH RIGHT ICON'/>
          <TouchableOpacity onPress={() => this.props.navigator.push({
            screen: 'ScreenOne', // unique ID registered with Navigation.registerScreen
            title: 'Screen One ABCVDDFFD FDF FF DF DF', // navigation bar title of the pushed screen (optional)
            // titleImage: require('../../img/my_image.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
            // passProps: {}, // Object that will be passed as props to the pushed screen (optional)
            animated: true, // does the push have transition animation or does it happen immediately (optional)
            animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
            // backButtonTitle: undefined, // override the back button title (optional)
            backButtonHidden: true, // hide the back button altogether (optional)
            // navigatorStyle: {}, // override the navigator style for the pushed screen (optional)

            disabledBackGesture: true// override the nav buttons for the pushed screen (optional)
          })}>
            <Text>Logindd</Text>
          </TouchableOpacity>
        </View>
      </SideMenu>
    )
  }
}
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  }
};
const mapStateToProps = state => {
  let { profile } = state;
  console.log('profile', profile)
  return { profile }
};
export default connect(mapStateToProps, null)(LoginScreen)
