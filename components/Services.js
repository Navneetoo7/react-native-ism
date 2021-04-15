import React, { useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  BackHandler,
  ImageBackground,
  TouchableOpacity,
  AppRegistry,
} from "react-native";
import Header from "./Header";
import { useFocusEffect } from "@react-navigation/native";

const Services = ({ navigation }) => {
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
      source={require("../assets/download.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <Header />

        <TouchableOpacity
          style={styles.box}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Form")}
        >
          <Image source={require("../assets/care.png")} style={styles.inner} />
          <Text style={styles.text}>Caregiving</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Form")}
        >
          <Image
            source={require("../assets/hoemheath.png")}
            style={styles.inner}
          />
          <Text style={styles.text}>Home health</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Form")}
        >
          <Image
            source={require("../assets/hospice.png")}
            style={styles.inner}
          />
          <Text style={styles.text}>Hospice</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Form")}
        >
          <Image
            source={require("../assets/nursing1.png")}
            style={styles.inner}
          />
          <Text style={styles.text}>Nursing Services</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Form")}
        >
          <Image
            source={require("../assets/placement.png")}
            style={styles.inner}
          />
          <Text style={styles.text}> Placement Services</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "85%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    
  },
  box: {
    width: "25%",
    height: "25%",
    padding: 0,
    margin: 12,
  },
  inner: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    justifyContent: "center",
  },
});
AppRegistry.registerComponent("Services", () => Services);
export default Services;
