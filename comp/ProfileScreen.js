/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
const FBSDK = require('react-native-fbsdk');
import Navigator from 'react-native-deprecated-custom-components';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';
const {
  LoginButton,
  AccessToken
} = FBSDK;
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'

const deviceW = Dimensions.get('window').width
const PolicyHTML = require('./dribble.html');

const basePx = 375

var Login = React.createClass({
  render: function() {
    return (
      <View>

      </View>
    );
  }


});

var ShotList = require("./app/ShotList")

var API_URL = "https://api.dribbble.com/v1/",
    ACCESS_TOKEN = "7a22f910dcdff63bd3ebbe48d022f05e8268c67249709b5489d923f97bcf96ec";



var DribbbleApp = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: "home"
    };
  },

  _renderContent: function(category: string, title: ?string) {
    return (
      <Navigator style={styles.wrapper}
        initialRoute={{
          component: ShotList,
          title: title,
          passrops: {filter: category}
        }} />
    );
  },
  render: function() {
    return (
     <TabNavigator style={styles.container}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="All"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="home" size={px2dp(22)} color="#3496f0"/>}
          badgeText="1"
          onPress={() => this.setState({selectedTab: 'home'})}>
          <Home/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="user" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="user" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'profile'})}>
          <Profile/>

        </TabNavigator.Item>
          <TabNavigator.Item
          selected={this.state.selectedTab === 'LogOut'}
          title="LogOut"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="user" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="user" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'LogOut'})}>
          <LogOut/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
});







function px2dp(px) {
  return px *  deviceW / basePx
}

class Home extends Component {

  navigationOptions: { title: 'Header title' }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Dribbbles Home

        </Text>
      </View>
    )
  }
}

class Profile extends Component {
  render() {
    return (
 
     <WebView
        source={PolicyHTML}
       // style={{marginTop: 20}} 
          style={{flex: 1}}/>
    )

  }
}

class LogOut extends Component {
  render() {
    return (

            <View style={styles.container}>
        <Text style={styles.welcome}>
         
        </Text>
        <LoginButton style = {styles.fbbtn}

          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {

              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    const { accessToken } = data
          initUser(accessToken)

              navigate('Profile')
                    //alert(data.accessToken.toString());
                    //alert("login is theek.");
                  }

                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
     
    )
  }
}

export default class ProfileScreen extends Component {
  state= {
    selectedTab: 'home'
  };

  render() {
    return (
     //<View></View>
     <DribbbleApp/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
