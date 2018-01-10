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
  Button,
  Image,
  Alert,
  ScrollView,
  Dimensions
} from 'react-native';
import { TabNavigator } from "react-navigation";
import HomeHeader from '../rgBase/homeHeader.js';
import HomeNav from'./homeNav.js'
import HomeMiddle from './homeMiddle.js';
import CardView from './cardView.js';
import CardViewText from './cardViewText.js';
import CardHearder from './cardHearder.js';
import CardShop from './cardShop.js';


// 模仿后台数据真实的就用fetch回调就ok了
const NAVDATA = require('../../LocalData/TopMenu.json')
const MILLDDATA = require('../../LocalData/HomeTopMiddleLeft.json')
const MILLDTOPDATA = require('../../LocalData/HomeTopMiddle.json')
const MILLDREALDATA = require('../../LocalData/XMG_Home_D4.json')
const CARDSHOPDATA = require('../../LocalData/XMG_Home_D5.json')
const WIDTH = Dimensions.get('window').width;

export default class RgHome extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
        titlemsg: {
            smple:false,
            title:'搜索'
        },
    };
  }
  static defaultProps = {
      // 这里是导航的数据
      homeNavData:NAVDATA.data,
      milldata:MILLDDATA,
      millrealdata:MILLDREALDATA.data,
      cardShopData:CARDSHOPDATA.data
  };  // 注意这里有分号
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={{uri:'icon_tabbar_homepage'}}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
      header:<View style={{backgroundColor:'rgb(255,97,1)',height:14}}></View>
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <HomeHeader 
        handleSelect={(text)=>{
          this.props.navigation.navigate('SeachDetail')
        }}
        title={this.state.titlemsg}
      />
        <ScrollView>
          <HomeNav homeNavData={this.props.homeNavData}/>
          <HomeMiddle milldata={this.props.milldata}/>
          <View style={{marginTop:15,height:57}}>
            <CardView dataRight={MILLDTOPDATA.data[0]}/>      
          </View>
          <View style={styles.fourStyle}>
            {this._carView()}
          </View>
          <CardHearder
            imgurl={'gwzx'}
            leftTitle={'购物中心'}
            rightTitle={'全部4家'}
            JumpNews={
              ()=>{
                this.props.navigation.navigate('SeachDetail')
              }
            }
          />
          <View>
            <ScrollView
              horizontal={true}
              // pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
            >
              {this._cardShop()}
            </ScrollView>
          </View>
          <CardHearder
            imgurl={'rm'}
            leftTitle={'热门频道'}
            rightTitle={'查看全部'}
            JumpNews={
              ()=>{
                this.props.navigation.navigate('SeachDetail')
              }
            }
          />
          {/* <CardShop width={WIDTH/3} cardShopData={this.props.cardShopData[0]}/> */}
          {/* <Button
              onPress={() => this.props.navigation.navigate('SeachDetail')}
              title="详情页"
            /> */}
        </ScrollView>
      </View>
    );
  }
  handleSelect(text){
    Alert.alert(text)
  }

  componentDidMount() {
    //注意addListener的key和emit的key保持一致
      // this.msgListener = DeviceEventEmitter.addListener('Msg',(listenerMsg) => {
      //     Alert.alert(listenerMsg)
      // });

  }

  componentWillUnmount() {
      //此生命周期内，去掉监听
      // this.msgListener&&this.msgListener.remove();
  }
  _carView(){
    let cardArr = [];
    for(let i=0;i<this.props.millrealdata.length;i++){
      cardArr.push(<CardViewText key={i} width={WIDTH/2} dataRight={this.props.millrealdata[i]}/>)
    }
    return cardArr;
  }
  _cardShop(){
    let cardArr = []
    for(let i=0;i<this.props.cardShopData.length;i++){
      cardArr.push(<CardShop key={i} JumpNews={
        (url)=>{
          this.props.navigation.navigate('ShopDetail',{weburl:url})
        }
      } 
      width={WIDTH/3} cardShopData={this.props.cardShopData[i]}/>)
    }
    return cardArr;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0eff5',
  },
  icon: {
    width: 26,
    height: 26,
  },
  fourStyle:{
    flexDirection: 'row',
    flexWrap:'wrap'
  }
});
