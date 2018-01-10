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
  View
} from 'react-native';
import { StackNavigator } from "react-navigation";

import MyApp from "./Component/main.js";
import SerchDetail from "./Component/rgDetail/rgSerchDetail.js";
import ShopDetail from "./Component/rgDetail/rgShopDetail.js";

 
const SimpleStack = StackNavigator({
  Home: {
    screen: MyApp,
    mode:'modal'
  },
  SeachDetail: {
    screen: SerchDetail,
  },
  ShopDetail: {
    screen: ShopDetail,
  }
});

export default SimpleStack;

