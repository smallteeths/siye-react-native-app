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
  TouchableOpacity,
} from 'react-native';

export default class MyCell extends Component<{}> {
    static defaultProps = {
        title: '',
        picUrl:'',
        rightText:'',
        rightImg:'',
    };  // 注意这里有分号
    render() {
        return (
            <TouchableOpacity>
                <View style={styles.container}>
                    <View style={styles.mycellLeft}>
                        <Image source={{uri:this.props.picUrl}} style={{width:26,height:26,marginRight:8}}/>
                        <Text>{this.props.title}</Text>
                    </View>
                    <View style={styles.mycellRight}>
                        {this.isHasText()}
                        <Image source={{uri:'icon_cell_rightarrow'}} style={{width:8,height:13,marginLeft:4}}/>  
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    // 判断组件右侧是否有文字
    isHasText(){
        if(this.props.rightText!='' && this.props.rightImg==''){
            return <Text style={{marginRight:8,color:'#3c3c3c'}}>{this.props.rightText}</Text>
        }else if(this.props.rightText==''&& this.props.rightImg!=''){
            return <Image style={{marginRight:8,width:34,height:18}} source={{uri:this.props.rightImg}}/>
        }else{
            return <Text></Text>
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:8,
        paddingRight:8,
        height:54,
        backgroundColor:'#fff',
        borderBottomColor:'#ddd',
        borderBottomWidth:0.5,
    },
    mycellLeft:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    mycellRight: {
        flexDirection:'row',
        alignItems:'center',
    }
});
