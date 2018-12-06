import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./Dashboard.style";
import { Button } from "react-native-elements";

export default class Dashboard extends Component {
  _handleLogout = () => {
    this.props.navigation.navigate("Technical");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello!</Text>
        <Button
          buttonStyle={styles.btnLogout}
          title="Logout"
          onPress={this._handleLogout}
        />
      </View>
    );
  }
}
