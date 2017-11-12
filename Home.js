'use strict';
import PropTypes from 'prop-types';

var React = require('react-native');
var {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} = React;


var Navigator = require('react-native-deprecated-custom-components');
class Home extends React.Component {


  render() {
    return (
      <View style={styles.container}>

        <View>
        <Text>Welcome to the Facebook SDK for React Native!</Text>
      </View>
      </View>
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


module.exports = Home;
