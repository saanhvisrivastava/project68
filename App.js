
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottonTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import fb from './screens/fb';
import insta from './screens/insta';

export default class App extends React.Component{
  render(){
    return(
    <AppContainer/>

    )

  }

}

const tabNavigator=createBottonTabNavigator({
  Instagram:{screen:insta},
  Facebook:{screen:fb}
})
 const AppContainer=createAppContainer(tabNavigator);