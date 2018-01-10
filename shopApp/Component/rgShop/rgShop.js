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
  Image
} from 'react-native';
import { TabNavigator } from "react-navigation";

export default class rgShop extends Component<{}> {
    static navigationOptions = {
        tabBarLabel: '商家',
        tabBarIcon: ({ tintColor }) => (
            <Image
            source={{uri:'icon_tabbar_merchant_normal'}}
            style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          商家
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  icon:{
    width: 26,
    height: 26,
  }
});
