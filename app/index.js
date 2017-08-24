import { Navigation } from 'react-native-navigation';

import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import ScreenThree from './screens/ScreenThree';
import ScreenFour from './screens/ScreenFour';
import LoginScreen from './screens/LoginScreen';
import { Provider } from 'react-redux';
import reducers from './reducers'
import {
  createStore,
  applyMiddleware
} from 'redux';
const store = createStore(reducers);
export default () => {
  Navigation.registerComponent('ScreenOne', () => ScreenOne);
  Navigation.registerComponent('ScreenTwo', () => ScreenTwo);
  Navigation.registerComponent('ScreenThree', () => ScreenThree);
  Navigation.registerComponent('ScreenFour', () => ScreenFour);
  Navigation.registerComponent('LoginScreen', () => LoginScreen, store, Provider);

  // Navigation.startTabBasedApp({
  //   tabs:[
  //     {
  //       label: 'One',
  //       screen: 'ScreenOne',
  //       title: 'One',
  //     },
  //     {
  //       label: 'Two',
  //       screen: 'ScreenTwo',
  //       title: 'Two',
  //     },
  //
  //   ]
  // })

  Navigation.startSingleScreenApp({
    screen: {
      screen: 'LoginScreen', // unique ID registered with Navigation.registerScreen
      navigatorStyle: {
        navBarHidden: true
      }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
      navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
    },
    // drawer: { // optional, add this if you want a side menu drawer in your app
    //   left: { // optional, define if you want a drawer from the left
    //     screen: 'ScreenOne', // unique ID registered with Navigation.registerScreen
    //     passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
    //   },
    //   right: null,
    //   style: { // ( iOS only )
    //
    //     contentOverlayColor: 'rgba(0,0,0,0.9)', // optional, add this if you want a overlay color when drawer is open
    //     leftDrawerWidth: 70, // optional, add this if you want a define left drawer width (50=percent)
    //     // rightDrawerWidth: 70 // optional, add this if you want a define right drawer width (50=percent)
    //   },
    //
    //   // for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
    //   disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
    // },
    passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
    animationType: 'none', // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
    disableOpenGesture: true,
  });
}
