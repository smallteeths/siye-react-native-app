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
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert
} from 'react-native';


class DetailedTitle extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
            
        </View>
    );
  }
//   发送通知让父组件跳转页面

  sendJump=(text)=>{
        this.props.handleSelect(text);
    }
}

const styles = StyleSheet.create({
    container: {
        height : 48,
        width : '100%',
        backgroundColor: 'rgb(255,97,1)',
        flexDirection: 'row',
        alignItems:'center',
        // paddingLeft:10,
        justifyContent:'space-around'
    },
    imageContainer : {
        width:'20%',
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    InputStyle : {
        width:'60%',
        height:30,
        backgroundColor:'#fff',
        borderRadius:15,
        paddingLeft:15
    }
});

module.exports = DetailedTitle;