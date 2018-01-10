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
import CardView from './cardView.js'


export default class HomeMiddle extends Component<{}> {
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.left}>
                <TouchableOpacity>
                    <Image source={{uri:this.props.milldata.dataLeft[0].img1}} style={{width:90,height:30,marginBottom:6}}/>
                    <Image source={{uri:this.props.milldata.dataLeft[0].img2}} style={{width:77,height:30,marginBottom:6}}/>
                    <Text style={{fontSize:12,color:'#ccc',marginBottom:6}}>{this.props.milldata.dataLeft[0].title}</Text>
                    <View style={{marginBottom:6}} style={{flexDirection:'row', alignItems:'center',}}>
                        <Text style={{fontSize:12,color:'#4bccbe'}}>{this.props.milldata.dataLeft[0].price}</Text>
                        <View style={{backgroundColor:12,backgroundColor:'#ffff00',height:15,marginLeft:6,alignItems:'center',
            justifyContent:'center',}}>
                            <Text style={{fontSize:12,color:'#ffa500'}}>{this.props.milldata.dataLeft[0].sale}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.right}>
                {this.rightList()}
            </View>
        </View>
        );
    }

    rightList(){
        let listArr = [];
        for(var i=0;i<this.props.milldata.dataRight.length;i++){
            listArr.push(<CardView key={i} dataRight={this.props.milldata.dataRight[i]}/>)
        }
        return listArr;
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height:113,
        backgroundColor:'#fff',
        marginTop:15
    },
    left: {
        flex:1,
        borderRightColor:'#ddd',
        borderRightWidth:0.5,
        height:113,
        alignItems:'center',
        justifyContent:'center',
    },
    right: {
        flex:1,
        height:113,
    }
});
