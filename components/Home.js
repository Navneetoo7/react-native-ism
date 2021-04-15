import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";

const Home = ({ history }) => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/b2.png")}
        style={styles.imageb}
      >
        <Image style={styles.image} source={require("../assets/logo.png")} />
        <View style={styles.baseText}>
          <Text style={[styles.setFontSize, styles.setColorPurple]}>
            Immediate Service Request
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  imageb: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  image: {
    width: "60%",
    height: "25%",
    resizeMode: "contain",
  },
  baseText: {
    width: "70%",
    height: "40%",
    justifyContent: "center",
    color: "red",
  },
  setColorPurple: {
    color: "#99004D",
  },
  setFontSize: {
    fontSize: 30,
    fontWeight: "bold",
    alignItems: "center",
    marginBottom: 40,
    marginLeft: 10,
  },
});
export default Home;
