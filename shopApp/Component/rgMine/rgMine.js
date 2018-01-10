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
  TouchableOpacity
} from 'react-native';
import { TabNavigator } from "react-navigation";
import MyCell from '../rgBase/mysell.js'
import HomeHeader from '../rgBase/homeHeader.js';
const WIDTH = Dimensions.get('window').width;

export default class rgMine extends Component<{}> {
  constructor(props){
      super(props);
      this.state = {
          titlemsg: {
              smple:true,
              title:'',
              // 假的缓存数据
          },
      };
  }
  static navigationOptions = {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor }) => (
          <Image
              source={{uri:'icon_tabbar_mine'}}
              style={[styles.icon, {tintColor: tintColor}]}
          />
      ),
      header:<View style={{backgroundColor:'rgb(255,97,1)',height:14}}></View>
  }
  
  static defaultProps = {
    setArr: [
      {text:'小马哥钱包',picUrl:'card',rightText:'账户余额:100'},
      {text:'抵用券',picUrl:'draft',rightText:'0'},
      {text:'抵用券',picUrl:'gw'},
      {text:'抵用券',picUrl:'dy',rightImg:'me_new'},
      {text:'我要合作',picUrl:'pay',rightText:'轻松开店,招财进宝'},
      {text:'我的订单',picUrl:'collect',rightText:'查看全部订单'},
    ]
  };  
  render() {
    return (
      <View style={styles.container}>
        <HomeHeader title={this.state.titlemsg}
            handleGoBack={()=>{
                this.props.navigation.goBack();
            }}
        />
        <View style={styles.headerSell}>
          <View style={{flexDirection: 'row',alignItems:'center',height:65}}>
            <Image source={{uri:'see'}} style={{width:65,height:65,borderRadius:32.5,marginRight:8}}/>
            <Text style={{color:'#fff',fontSize:20,fontWeight:'700'}}>潇洒电商</Text>
            <Image source={{uri:'avatar_vip'}} style={{width:20,height:20,marginLeft:8}}/>
          </View>
          <View style={{flexDirection: 'row',alignItems:'center',height:65}}>
            <Image source={{uri:'icon_cell_rightarrow'}} style={{width:8,height:13}}/>
          </View>
          <View style={styles.headerAbsolute}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',height:38}}>
              <Text style={styles.textColor}>100</Text>
              <Text style={styles.textColor}>马哥券</Text>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',borderLeftWidth:1,borderRightWidth:1,borderColor:'#fff',height:38}}>
              <Text style={styles.textColor}>12</Text>
              <Text style={styles.textColor}>评价</Text>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',height:38}}>
              <Text style={styles.textColor}>50</Text>
              <Text style={styles.textColor}>收藏</Text>
            </View>
          </View>
        </View>
        <View style={styles.sellCenter}>
          <MyCell title={this.props.setArr[5].text} picUrl={this.props.setArr[5].picUrl} rightText={this.props.setArr[5].rightText}/>
          <View style={styles.sellOrder}>
            <View style={styles.orderItem}>
              <TouchableOpacity>
                <Image source={{uri:'order1'}} style={{width:50,height:34,marginBottom:8}}/>
                <Text style={{color:'#3c3c3c'}}>待付款</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.orderItem}>
              <TouchableOpacity>
                <Image source={{uri:'order2'}} style={{width:50,height:34,marginBottom:8}}/>
                <Text style={{color:'#3c3c3c'}}>待使用</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.orderItem}>
              <TouchableOpacity>
                <Image source={{uri:'order3'}} style={{width:50,height:34,marginBottom:8}}/>
                <Text style={{color:'#3c3c3c'}}>待评价</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.orderItem}>
              <TouchableOpacity>
                <Image source={{uri:'order4'}} style={{width:50,height:34,marginBottom:8}}/>
                <Text style={{color:'#3c3c3c'}}>退款/售后</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={{marginTop:10}}>
            <MyCell title={this.props.setArr[0].text} picUrl={this.props.setArr[0].picUrl} rightText={this.props.setArr[0].rightText}/>
          </View>
          <View>
            <MyCell title={this.props.setArr[1].text} picUrl={this.props.setArr[1].picUrl} rightText={this.props.setArr[1].rightText}/>
          </View>
          <View style={{marginTop:10}}>
            <MyCell title={this.props.setArr[2].text} picUrl={this.props.setArr[2].picUrl} />
          </View>
          <View style={{marginTop:10,marginBottom:10}}>
            <MyCell title={this.props.setArr[3].text} picUrl={this.props.setArr[3].picUrl} rightImg={this.props.setArr[3].rightImg}/>
          </View>
          <View style={{marginBottom:10}}>
            <MyCell title={this.props.setArr[4].text} picUrl={this.props.setArr[4].picUrl} rightText={this.props.setArr[4].rightText}/>
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
  icon: {
    width: 26,
    height: 26,
  },
  sellOrder: {
    height:88,
    flexDirection: 'row',
    justifyContent:'center',
    backgroundColor:'#fff'
  },
  orderItem:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  headerSell:{
    height:130,
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingLeft:14,
    paddingRight:14,
    backgroundColor:'rgb(255,97,1)'
  },
  headerAbsolute:{
    width:WIDTH,
    height:50,
    position:'absolute',
    backgroundColor:'rgba(255,255,255,.3)',
    bottom:0,
    flexDirection: 'row',
    alignItems:'center',
  },
  textColor:{
    color:'#fff',
    marginBottom:4
  }
});
