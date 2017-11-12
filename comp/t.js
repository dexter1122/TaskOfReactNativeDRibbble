/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Developer Principles and Policies
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @format
 */
'use strict';
import React, {Component ,PropTypes} from 'react';
import {StackNavigator} from 'react-navigation'
const FBSDK = require('react-native-fbsdk');
import ProfileScreen from './ProfileScreen';
import {
  TabNavigator,
} from 'react-navigation';

const {
  LoginButton,
  AccessToken
} = FBSDK;
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

var Login = React.createClass({
  render: function() {
    return (
      <View>

      </View>
    );
  }


});

class HomeScreen extends React.Component {
static navigationOptions = {
    label: 'Home Screen Login',
  };

    
render() {
       const { navigate } = this.props.navigation;


return (


       <View style={styles.container}>


<View style={styles.container}>


</View>

<View style={styles.container}>

<Text style={{color: 'white', fontWeight: 'bold' , flex: 2,}}>GALLERY APPLICATION</Text>

</View>

<View style = {styles.logocontainer}>
<Image style={styles.logo} source={require('./bg.png')}/>
<Text style={styles.title}>First App on the React Native Technology </Text>


</View>


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


              navigate('HomeScreen')
                    //alert(data.accessToken.toString());
                    //alert("login is theek.");
                  }

                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")

   }/>

<Button
        title="Go To Profile"
        onPress={() =>
          navigate('Profile')
        }
      />      

<View style = {styles.logocontainer}>
<Text style={styles.stitle}>Designed By Silk Road Network Communications </Text>


</View>


             </View>

    );
  }}
 
 const NavigationApp = StackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen}
});

        




                    //this.props.navigation.navigate('profile');

export default class t extends Component {

    render() {
       const { navigate } = this.props.navigation;

    return <NavigationApp/>;  /*(
       <View style={styles.container}>

<Button
        title="Go to profile"
        onPress={() =>
          navigate('profile')
        }
      />       
        <Text>
          Login to Facebook
        </Text>
        <Login />

      </View>
    );*/
  }
 }



 const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDDC39',
  },

logocontainer: {
alignItems:'center',
flexGrow:22,
justifyContent: 'center'
},
  logo:{
          width:100,
          height:100
  },
  title:{
   color:'#181f2b',
   marginTop:10,
   width:160,
   textAlign:'center',
   opacity:0.5,
  },
   stitle:{
   color:'#181f2b',
   marginTop:6,
   width:260,
   textAlign:'center',
   opacity:0.3,
  },
  buttonContainer:{
backgroundColor: '#2980b9',

  },

});