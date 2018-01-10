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
  ScrollView
} from 'react-native';
import { TabNavigator } from "react-navigation";
import HomeHeader from '../rgBase/homeHeader.js';
import BaseSet from '../rgBase/baseSet.js'
export default class rgMore extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            titlemsg: {
                smple:true,
                title:'更多',
                // 假的缓存数据
                
            },
        };
    }
    static defaultProps = {
        setArr: ['扫一扫','省流量模式','消息提醒','邀请好友使用小码电商','清空缓存','意见反馈',
        '问卷调查','支付帮助','网络诊断','关于码团','我要应聘','精品应用'],
        cache:'1.99MB'
    };  

    static navigationOptions = {
        tabBarLabel: '更多',
        tabBarIcon: ({ tintColor }) => (
            <Image
            source={{uri:'icon_tabbar_misc'}}
            style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
        header:<View style={{backgroundColor:'rgb(255,97,1)',height:14}}></View>
    }
  render() {
    return (
      <View style={styles.container}>
        <HomeHeader title={this.state.titlemsg}
            handleGoBack={()=>{
                this.props.navigation.goBack();
            }}
        />
        <ScrollView>
            <View style={styles.moreSet}>
                <BaseSet title={this.props.setArr[0]}/>
            </View>
            <View>
                <BaseSet 
                    title={this.props.setArr[1]}
                    isSwitch={true}
                    />
            </View>
            <View>
                <BaseSet title={this.props.setArr[2]}/>
            </View>
            <View>
                <BaseSet title={this.props.setArr[3]}/>
            </View>
            <View>
                <BaseSet 
                    title={this.props.setArr[4]}
                    cache={this.props.cache}
                />
            </View>
            <View style={{marginTop:10}}>
                <BaseSet 
                    title={this.props.setArr[5]}
                />
            </View>
            <View>
                <BaseSet 
                    title={this.props.setArr[6]}
                />
            </View>
            <View>
                <BaseSet 
                    title={this.props.setArr[7]}
                />
            </View>
            <View>
                <BaseSet 
                    title={this.props.setArr[8]}
                />
            </View>
            <View>
                <BaseSet 
                    title={this.props.setArr[9]}
                />
            </View>
            <View>
                <BaseSet 
                    title={this.props.setArr[10]}
                />
            </View>
            <View style={{marginTop:10}}>
                <BaseSet 
                    title={this.props.setArr[11]}
                />
            </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(240,239,246)',
  },
  moreSet: {
    marginTop:10,
    marginBottom:10
  },
  icon: {
    width: 26,
    height: 26,
  },
});
