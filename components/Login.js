import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
  Alert,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const backAction = () => {
  //   Alert.alert("Hold on!", "Are you sure you want to go back?", [
  //     {
  //       text: "Cancel",
  //       onPress: () => null,
  //       style: "cancel",
  //     },
  //     { text: "YES", onPress: () => BackHandler.exitApp() },
  //   ]);
  //   return true;
  // };

  // useEffect(() => {
  //   BackHandler.addEventListener("hardwareBackPress", backAction);

  //   return () =>
  //     BackHandler.removeEventListener("hardwareBackPress", backAction);
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate("Search");
        // Return true to stop default back navigaton
        // Return false to keep default back navigaton
        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  return (
    <ImageBackground
      source={require("../assets/logoback.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/logo.png")} />
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email / Phone"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => history.push("/Search")}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>SignUp</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "65%",
    height: "30%",
    marginBottom: 10,
    resizeMode: "contain",
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "lightblue",
  },
});
export default Login;
