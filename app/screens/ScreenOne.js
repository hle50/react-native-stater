/**
 * Created by nois on 8/23/17.
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  AlertIOS
} from 'react-native';
import {
  Icon
} from 'react-native-elements';
import SideMenu from 'react-native-side-menu';
export default class ScreenOne extends Component {
  static navigatorStyle = {
    disabledBackGesture: true
  };

  static navigatorButtons = {
    leftButtons: [
      {
        icon: require('../assets/i1.png'), // for icon button, provide the local image asset name
        id: 'add' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
      }
    ],
    rightButtons: [
      {
        title: 'Edit', // for a textual button, provide the button title (label)
        id: 'edit', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        testID: 'e2e_rules', // optional, used to locate this view in end-to-end tests
        //disabled: true, // optional, used to disable the button (appears faded and doesn't interact)
        disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
        showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
        buttonColor: 'blue', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
      },

    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      test: 'ola'
    };
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'edit') { // this is the same id field from the static navigatorButtons definition
        this.props.navigator.push({
          screen: 'ScreenTwo', // unique ID registered with Navigation.registerScreen
          title: 'Screen Two', // navigation bar title of the pushed screen (optional)
          // titleImage: require('../../img/my_image.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
          passProps: { obj: { a: 5 } },
          animated: true, // does the push have transition animation or does it happen immediately (optional)
          animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
          backButtonTitle: '', // override the back button title (optional)

        })
      }
      if (event.id == 'add') {
        AlertIOS.alert('NavBar', 'Add button pressed');
      }
    }

    switch (event.id) {
      case 'willAppear':
        console.log('willAppear', this.state.test);
        break;
      case 'didAppear':
        console.log('didAppear');
        break;
      case 'willDisappear':
        console.log('willDisappear');
        break;
      case 'didDisappear':
        console.log('didDisappear');
        this.setState({ test: 'loto' })
        break;
    }
  }

  componentWillMount() {
    console.log('willmount')
  }

  render() {
    const { container } = styles;
    const { test } = this.state;
    const Menu = <View style={{ flex: 1, backgroundColor: 'blue' }}><Text>Menu ne</Text></View>
    return (
      <SideMenu menu={Menu}>
        <View style={container}>
          <Text>Screen One</Text>
          <Text>{test}</Text>
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
}
