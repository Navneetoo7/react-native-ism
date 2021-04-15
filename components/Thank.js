import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Thank = () => {
  return (
    <View style={styles.container}>
      <Text>Thanks for using our services</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Thank;
