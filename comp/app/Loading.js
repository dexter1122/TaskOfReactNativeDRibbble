var React = require("react-native");
var {
  ActivityIndicatorIOS,
  StyleSheet,
  View,
} = React;
var createReactClass = require('create-react-class');
var Loading = createReactClass({
  render: function() {
    return (
      <View style={[styles.container, styles.centerText]}>
     <Text>Loading Content</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "center",
  },
  centerText: {
    alignItems: "center",
  },
  spinner: {
    width: 50,
  }
});

module.exports = Loading;
