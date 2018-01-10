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

export default class CardView extends Component<{}> {
    render() {
        return (
            <View style={styles.containersf}>
                <View style={styles.lefts}>
                    <TouchableOpacity>
                        <Text style={{color:this.props.dataRight.titleColor,fontSize:14}}>{this.props.dataRight.title}</Text>
                        <Text style={{color:'#3c3c3c',fontSize:14}}>{this.props.dataRight.subTitle}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rights}>
                    <TouchableOpacity>
                        <Image style={{width:90,height:40}} source={{uri:this.props.dataRight.rightImage}}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containersf: {
        flex:1,
        borderTopColor:'#ddd',
        borderTopWidth:0.5,
        flexDirection:'row',
    },
    lefts:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    rights: {
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    img:{
        width:'100%',
        height:40,
        backgroundColor:'yellow'
    }
});
