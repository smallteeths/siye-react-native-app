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

export default class CardHearder extends Component<{}> {
    static defaultProps = {
        // 这里是导航的数据
        imgurl:'',
        leftTitle:'',
        rightTitle:''
    };  // 注意这里有分号
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Image style={{width:25,height:25,marginRight:4}} source={{uri:this.props.imgurl}}/>
                <Text style={{color:'#3c3c3c'}}>{this.props.leftTitle}</Text>
            </View>
            <View style={styles.right}>
                <TouchableOpacity
                    onPress={()=>this.JumpNew()}
                    style={styles.right}
                >
                    <Text style={{color:'#3c3c3c',marginRight:4}}>{this.props.rightTitle}</Text>
                    <Image source={{uri:'icon_cell_rightarrow'}} style={{width:8,height:13}}/>
                </TouchableOpacity>
            </View>
        </View>
        );
    }
    JumpNew=()=>{
        this.props.JumpNews();
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:15,
    paddingLeft:10,
    paddingRight:10,
    height:44,
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor:'#fff',
    borderBottomColor:'#ddd',
    borderBottomWidth:0.5
  },
  left:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
  },
  right:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
  }
});
