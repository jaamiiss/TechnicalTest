import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Dashboard from "./src/screens/Dashboard";
import LoginScreen from "./src/screens/LoginScreen";

const Views = createStackNavigator(
  {
    Technical: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Dashboard"
  }
);

const AppContainer = createAppContainer(Views);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
