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


class HomeHeader extends Component<{}> {
    render() {
        return this.headerElement();
  }

  headerElement(){
      if(this.props.title.smple){
        return  <View style={styles.simpleTitles}>
                    <TouchableOpacity
                        onPress = {()=>{
                            this.sendGoBack()
                        }}
                    >
                        <View style={styles.goback}>
                            <Image source={{uri:'icon_camera_back_highlighted'}} style={{width:18,height:18}}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.simpleTitle}>
                        <TouchableOpacity>
                            <View style={styles.gobackText}>
                                <Text style={{color:'#fff',fontSize:18}}>{this.props.title.title}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
      }else{
        return <View style={styles.container}>
                    <TouchableOpacity>
                        <Text style={{color:'#fff',fontSize:18}}>抚顺</Text>
                    </TouchableOpacity>
                    <TextInput 
                    style={styles.InputStyle}
                    placeholder = "输入商家、品类、商品"
                    onEndEditing={(event) => this.sendJump(
                        event.nativeEvent.text
                    )}
                    ></TextInput>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity

                        >
                            <Image source={{uri:'icon_homepage_message'}} style={{width:30,height:30}}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity
                        
                        >
                            <Image source={{uri:'icon_homepage_scan'}} style={{width:30,height:30}}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
      }
  }
//   发送通知让父组件跳转页面

    sendJump=(text)=>{
        this.props.handleSelect(text);
    }

    sendGoBack=()=>{
        this.props.handleGoBack();
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
    },
    simpleTitle : {
        flexDirection: 'row',
        flex:8,
        width:'100%',
        height:48,
        backgroundColor: 'rgb(255,97,1)',
        alignItems:'center',
        justifyContent:'center'
    },
    simpleTitles : {
        height : 48,
        backgroundColor: 'rgb(255,97,1)',
        position:'relative',
        flexDirection: 'row',
    },
    goback : {
        height:48,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        // position:'absolute'
    },
    gobackText : {
        
    }
});

module.exports = HomeHeader;