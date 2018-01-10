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
  TouchableOpacity
} from 'react-native';
import { TabNavigator } from "react-navigation";


export default class CardShop extends Component<{}> {

    static defaultProps = {
        // 这里是导航的数据
        cardShopData:{},
        width:0
    };  // 注意这里有分号

    render() {
        return (
        <TouchableOpacity
            onPress={()=>this.JumpNew(this._webUrl())}
        >
        <View style={[styles.container,{width:this.props.width}]}>
            <View style={styles.imgBorder}>
                <Image style={{width:100,height:70,borderRadius:6}} source={{uri:this.props.cardShopData.img}}/>
                <Text style={styles.textPosition}>{this.props.cardShopData.showtext.text}</Text>
            </View>
            <View  style={{width:100,marginTop:10}}>
                <Text style={{color:'#3c3c3c'}}>{this.props.cardShopData.name}</Text>
            </View>
        </View>
        </TouchableOpacity>
        );
    }
    JumpNew=(url)=>{
        this.props.JumpNews(url);
    }
    // 处理传过来的地址
    _webUrl(){
        return this.props.cardShopData.detailurl.replace('imeituan://www.meituan.com/web/?url=','')
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height:120,
        alignItems:'center',
        justifyContent:'center',
    },
    textPosition : {
        position:'absolute',
        padding:4,
        bottom:10,
        backgroundColor:'#ffa500',
        color:'#fff'
    },
    imgBorder:{
        borderRadius:6
    }
});
