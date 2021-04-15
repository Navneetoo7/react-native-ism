import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  ImageBackground,
  View,
  BackHandler,
} from "react-native";
import Header from "./Header";
import { useFocusEffect } from "@react-navigation/native";

const Form = ({ navigation }) => {
  const [name, onChangeName] = React.useState("");
  const [address, onChangeAddress] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [contact, onChangeContact] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const goForFetch = () => {
  fetch('https://liasmithapitest.azurewebsites.net/api/Users/registerD?name=Dear Client', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstParam: 'onChangeName',
    twoParam: 'onChangeAddress',
    threeParam: 'onChangeContact',
    fourParam: 'onChangeNumber',
    fiveParam: 'onChangeEmail'
  })
});
  }
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate("Services");
        // Return true to stop default back navigaton
        // Return false to keep default back navigaton
        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
    }, [])
  );
const goto = () => {
  navigation.navigate("Thank")
}
  return (
    <SafeAreaView>
      <Header />
      <ImageBackground
        source={require("../assets/logoback.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder=" Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
          placeholder=" Address"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeContact}
          value={contact}
          placeholder=" Contact"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder=" Bad Number"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder=" email"
        />
        <View style={styles.btm}>
          <Button title="Submit" onPress={() => goForFetch, goto} />
        </View>
        <View style={styles.RectangleShapeView}></View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btm: {
    marginTop: 20,
    paddingLeft: 90,
    paddingRight: 90,
  },
  input: {
    height: 40,
    padding: 10,
    margin: 12,
    marginLeft: 12,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
  },
  RectangleShapeView: {
    marginTop: "60%",
    width: "100%",
    height: "5%",
    marginLeft: 0,
    backgroundColor: "#B9B7DE",
  },
});

export default Form;
