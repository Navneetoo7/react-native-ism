import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text> Welcome to the Immediate Service Request</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
});
