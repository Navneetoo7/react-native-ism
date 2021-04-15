import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Image = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome to the Immediate Service Request</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  title: {
    color: "black",
    marginTop: "10%",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Image;
