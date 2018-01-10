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
  ScrollView,
  Dimensions,
  Alert,
  FlatList,
  TouchableOpacity
} from 'react-native';
const WIDTH = Dimensions.get('window').width;

export default class HomeNav extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            activeIcon:0
        };
    }
    static defaultProps = {
        itemArrs:[{color:'red'},{color:'blue'}]
    };  // 注意这里有分号

    render() {
        return (
            <View style={styles.containert}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
                >
                    {this.scrollItem()}
                </ScrollView>
                <View style={styles.iconss}>
                    {this.ItemIcon()}
                </View>
            </View>
        );
    }
    // 返回滚动的页面
    scrollItem(){
        var itemArr = [];
        for(var i=0;i<this.props.homeNavData.length;i++){
            itemArr.push(
                <View key={i} style={styles.item}>
                    <FlatList
                    horizontal={false}
                    data={this.props.homeNavData[i]}
                    renderItem={this._navitem}
                    extraData={this.state}
                    numColumns={5}
                    keyExtractor={this._keyExtractor}
                    />
                </View>
            )
        }
        return itemArr;
    }
    //这是给flatlist返回键
    _keyExtractor = (item, index) => index;
    // 返回小圆点
    ItemIcon(){
        var IconArr = [];
        for(var i=0;i<this.props.itemArrs.length;i++){
            IconArr.push(<View key={i} style={[styles.icon,{backgroundColor:this.state.activeIcon==i?"#fd4b1f":'#979797'}]}></View>)
        }
        return IconArr;
    }
    // 滚动之后调用此函数
    onAnimationEnd(e){
        // 求出水平方向的偏移量
        var offSetX = e.nativeEvent.contentOffset.x;
        var activeIcon = Math.floor(offSetX / WIDTH);
       
        this.setState({
            activeIcon:activeIcon
        });
    }
    // 每个导航的返回
    _navitem=(({item})=>(
        <TouchableOpacity
        activeOpacity={0.5}
        >
            <View key={item.index} style={styles.navlist}>
               <Image source={{uri:item.image}} style={{width:44,height:44,marginBottom:6}}/> 
               <Text style={{color:'#3c3c3c',fontSize:12}}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    ))
}

const styles = StyleSheet.create({
    containert: {
        height:176,
        backgroundColor:'#000',
        position:'relative',
        backgroundColor:'#fff',
        paddingBottom:10
        
    },
    item:{
        height:166,
        width:WIDTH,
        backgroundColor:'#fff',
    },
    iconss: {
        position:'absolute',
        bottom:3,
        width:'100%',
        // height:20,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
    },
    icon: {
        width:8,
        height:8,
        borderRadius:4,
        marginLeft:10
    },
    navlist:{
        height:83,
        width:WIDTH/5,
        alignItems:'center',
        justifyContent:'center',
    }
});
