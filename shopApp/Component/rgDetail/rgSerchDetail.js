import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator,StackNavigator } from "react-navigation";
import HomeHeader from "../rgBase/homeHeader.js"

export default class SerchDetail extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            titlemsg: {
                smple:true,
                title:'搜索'
            },
        };
    }
    static navigationOptions = ({ navigation }) => {
    return {
            header:<View style={{backgroundColor:'rgb(255,97,1)',height:14}}></View>
        };
    };
    render() {
        return (
            <View style={styles.container}>
                <HomeHeader title={this.state.titlemsg}
                    handleGoBack={()=>{
                        this.props.navigation.goBack();
                    }}
                />
                <Text style={styles.instructions}>
                搜索
                </Text>
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