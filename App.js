import React from "react";
import { NativeRouter, Switch, Route } from "react-router-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Alert,
  Button,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home.js";
import Search from "./components/Search.js";
import Form from "./components/Form.js";
import Services from "./components/Services.js";
import Thank from "./components/Thank.js";
import Login from "./components/Login.js";
import SearchBar from "./components/SearchBar.js"
import Client from "./components/Client.js"

const Stack = createStackNavigator();
export default function App() {
  console.log("App executed");
  return (
    // <NativeRouter>
    //   <View style={styles.container}>
    //     <Switch>
    //       {/* <Route exact path="/" component={Home} /> */}
    //       <Route exact path="/Login" component={Login} />
    //       <Route exact path="/" component={Search} />
    //       <Route exact path="/Form" component={Form} />
    //       <Route exact path="/Services" component={Services} />
    //       <Route exact path="/Thank" component={Thank} />
    //     </Switch>
    //   </View>
    // </NativeRouter>

    //Stack navigation

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: "Search", //Set Header Title
            headerStyle: {
              backgroundColor: "#8e0d50", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login", //Set Header Title
            headerStyle: {
              backgroundColor: "#8e0d50", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Services"
          component={Services}
          options={{
            title: "Services", //Set Header Title
            headerStyle: {
              backgroundColor: "#8e0d50", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Form"
          component={Form}
          options={{
            title: "Form", //Set Header Title
            headerStyle: {
              backgroundColor: "#8e0d50", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Thank"
          component={Thank}
          options={{
            title: "Thank", //Set Header Title
            headerStyle: {
              backgroundColor: "#8e0d50", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Client"
          component={Client}
          options={{
            title: "Admin", //Set Header Title
            headerStyle: {
              backgroundColor: "#8e0d50", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
