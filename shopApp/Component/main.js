/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import { TabNavigator ,StackNavigator} from "react-navigation";
import  RgHome  from './rgHome/rgHome.js';
import rgMine from './rgMine/rgMine.js';
import rgMore from './rgMore/rgMore.js';
import rgShop from './rgShop/rgShop.js';
import HomeHeader from './rgBase/homeHeader.js';

class HomeTitle extends Component<{}> {
  render() {
    const { navigate } = this.props.navigation
    return (
        <MyApp/>
    );
  }
  jumps(text){
    Alert.alert(text)
  }
}

const MyApp = TabNavigator({
    
    Home: {
        screen: RgHome,
        navigationOptions: {
            headerStyle:{
                backgroundColor: 'rgb(255,97,1)',
            }
        },
    },
    rgShop: {
        screen: rgShop,
    },
    rgMine: {
        screen: rgMine,
    },
    rgMore: {
        screen: rgMore,
    },
    
},  {
        // 调整切换属性
        tabBarOptions : {
            animationEnabled:true,
            pressColor:true,
            activeTintColor: 'rgba(238,97,0,1)',
            showIcon:true,
            style: {
                backgroundColor: 'rgba(248,248,248,1)',
            },
            tabStyle:{
                // backgroundColor: 'rgb(0,0,0)',
            },
            indicatorStyle:{
                backgroundColor: 'rgba(0,0,0,1)',
            }
        }
    }
);
  
 export default MyApp;
