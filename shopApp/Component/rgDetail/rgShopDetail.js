import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';
import { TabNavigator,StackNavigator } from "react-navigation";
import HomeHeader from "../rgBase/homeHeader.js"

export default class ShopDetail extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            titlemsg: {
                smple:true,
                title:'商城'
            },
        };
    }
    static navigationOptions = ({ navigation }) => {
    return {
            header:<View style={{backgroundColor:'rgb(255,97,1)',height:14}}></View>
        };
    };
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <HomeHeader title={this.state.titlemsg}
                    handleGoBack={()=>{
                        this.props.navigation.goBack();
                    }}
                />
                <WebView
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={{uri: params.weburl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});