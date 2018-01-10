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

export default class CardViewText extends Component<{}> {
    render() {
        return (
            <View style={[styles.containersf,{width:this.props.width}]}>
                <View style={styles.lefts}>
                    <TouchableOpacity>
                        <Text style={{color:this.props.dataRight.typeface_color,fontSize:14}}>{this.props.dataRight.title}</Text>
                        <Text style={{color:'#3c3c3c',fontSize:14}}>{this.props.dataRight.maintitle}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rights}>
                    <TouchableOpacity>
                        <Image style={{width:60,height:60}} source={{uri:this._imgurl(this.props.dataRight.imageurl)}}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    _imgurl(url){
        if(url.indexOf('w.h')>0){
            console.log('22222')
            var newurl =url.replace('w.h','200.200')
        }
        return newurl;
    }
}

const styles = StyleSheet.create({
    containersf: {
        borderTopColor:'#ddd',
        borderTopWidth:0.5,
        flexDirection:'row',
        borderRightColor:'#ddd',
        borderRightWidth:0.5
    },
    lefts:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    rights: {
        width:70,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'red'
    },
    img:{
        width:'100%',
        height:40,
        backgroundColor:'yellow'
    }
});
