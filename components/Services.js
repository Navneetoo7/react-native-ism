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
      source={require("../assets/4.png")}
      style={{ width: "100%", height: "100%",backgroundColor: '#8e0d50',
opacity: 0.6}}
    >
      <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo(1).png")} />
      
      <View style={styles.container1}>
        <TouchableOpacity
          style={styles.box}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Form")}
        >
          <Image source={require("../assets/Medical(1).png")} style={styles.inner} />
          <Text style={styles.text}>Caregiving</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Form")}
        >
          <Image
            source={require("../assets/Pharmacy(1).png")}
            style={styles.inner}
          />
          <Text style={styles.text}>Home Health</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Form")}
        >
          <Image
            source={require("../assets/Wheelchair(1).png")}
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
            source={require("../assets/Nurse(1).png")}
            style={styles.inner}
          />
          <Text style={[styles.text, styles.p]}>Nursing Services</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Form")}
        >
          <Image
            source={require("../assets/Hospital1.png")}
            style={styles.inner}
          />
          <Text style={[styles.text,styles.p]}>Placement Services</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    width: "100%",
    height: "85%",
    padding: 5,
    backgroundColor:'transparent',
    opacity: 2,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
    
  },
  container1:{
    flex:1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 80,
    height: 80,
    margin: 12,
    borderRadius: 80/2,
    backgroundColor:'#ba667c',
    alignItems: "center",
    justifyContent: "center",
  
  },
  inner: {
    flex: 1,
    width: "74%",
    height:"40%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    resizeMode: "contain",
  
  },
  p:{
    paddingLeft:"15%"
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    color:"white",
    
  },
  image: {
    width: "50%",
    height: "30%",
    marginBottom: 10,
    resizeMode: "contain",
    marginTop:"10%",
    marginRight:"5%"  },
});
AppRegistry.registerComponent("Services", () => Services);
export default Services;
