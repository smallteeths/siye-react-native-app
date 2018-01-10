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
  Switch
} from 'react-native';


export default class BaseSet extends Component<{}> {
  constructor(props){
      super(props);
      this.state = {
        solo:false,
      };
  }
  static defaultProps = {
      title: '',
      isSwitch: false,
      cache:''
  };  // 注意这里有分号
  render() {
    return (
        <TouchableOpacity
        >
          <View style={styles.container}>
              <Text>{this.props.title}</Text>
              {this.renderRightView()}
          </View>
        </TouchableOpacity>
        );
  }

  renderRightView(){
    if(!this.props.isSwitch){
      return(
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
          <Text style={{display:this.props.cache==''?'none':'flex',color:'#ccc'}}>{this.props.cache}</Text>
          <Image source={{uri:'icon_cell_rightarrow'}} style={{width:8,height:13,marginLeft:4}}/>  
        </View>
      )
    }else {
      return(
        <Switch
          value = {this.state.solo}
          // 正常情况下也会给父组件派送一个事件让父组件知道子组件的变化
          onValueChange={()=>{
            this.setState({
              solo:!this.state.solo
            })
          }}
        />
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height:54,
    backgroundColor:'white',
    borderBottomColor:'#ddd',
    borderBottomWidth:0.5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:8,
    paddingRight:8
  },
});
