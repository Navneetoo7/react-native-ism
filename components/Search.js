import React, {useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  Text,
  BackHandler,
  Alert,
} from "react-native";
import SearchableDropdown from 'react-native-searchable-dropdown';


// import MyTab from "./MyTabs.js";
const items = [
  //name key is must.It is to show the text in front
  {
    id: 1,
    cityName: "Huntsville\r\n"
},
{
    id: 2,
    cityName: "Anchorage\r\n"
},
{
    id: 3,
    cityName: "Phoenix\r\n"
},
{
    id: 4,
    cityName: "Little Rock\r\n"
},
{
    id: 5,
    cityName: "Sacramento\r\n"
},
{
    id: 6,
    cityName: "Los Angeles"
},
{
    id: 7,
    cityName: "Beverly Hills\r\n"
},
{
    id: 8,
    cityName: "Denver\r\n"
},
{
    id: 9,
    cityName: "Hartford\r\n"
},
{
    id: 10,
    cityName: "Dover\r\n"
},
{
    id: 11,
    cityName: "Washington\r\n"
},
{
    id: 12,
    cityName: "Pensacola\r\n"
},
{
    id: 13,
    cityName: "Miami\r\n"
},
{
    id: 14,
    cityName: "Orlando\r\n"
},
{
    id: 15,
    cityName: "Atlanta\r\n"
},
{
    id: 16,
    cityName: "Honolulu\r\n"
},
{
    id: 17,
    cityName: "Montpelier\r\n"
},
{
    id: 18,
    cityName: "Chicago\r\n"
},
{
    id: 19,
    cityName: "Springfield\r\n"
},
{
    id: 20,
    cityName: "Indianapolis\r\n"
},
{
    id: 21,
    cityName: "Davenport\r\n"
},
{
    id: 22,
    cityName: "Des Moines\r\n"
},
{
    id: 23,
    cityName: "Wichita\r\n"
},
{
    id: 24,
    cityName: "Hazard\r\n"
},
{
    id: 25,
    cityName: "New Orleans\r\n"
},
{
    id: 26,
    cityName: "Freeport\r\n"
},
{
    id: 27,
    cityName: "Baltimore\r\n"
},
{
    id: 28,
    cityName: "Boston\r\n"
},
{
    id: 29,
    cityName: "Coldwater\r\n"
},
{
    id: 30,
    cityName: "Gaylord\r\n"
},
{
    id: 31,
    cityName: "Duluth\r\n"
},
{
    id: 32,
    cityName: "Biloxi\r\n"
},
{
    id: 33,
    cityName: "St. Louis\r\n"
},
{
    id: 34,
    cityName: "Laurel\r\n"
},
{
    id: 35,
    cityName: "Hastings\r\n"
},
{
    id: 36,
    cityName: "Reno\r\n"
},
{
    id: 37,
    cityName: "Ashland\r\n"
},
{
    id: 38,
    cityName: "Livingston\r\n"
},
{
    id: 39,
    cityName: "Santa Fe\r\n"
},
{
    id: 40,
    cityName: "New York\r\n"
},
{
    id: 41,
    cityName: "Oxford\r\n"
},
{
    id: 42,
    cityName: "Walhalla\r\n"
},
{
    id: 43,
    cityName: "Cleveland\r\n"
},
{
    id: 44,
    cityName: "Tulsa\r\n"
},
{
    id: 45,
    cityName: "Portland\r\n"
},
{
    id: 46,
    cityName: "Pittsburgh\r\n"
},
{
    id: 47,
    cityName: "Newport\r\n"
},
{
    id: 48,
    cityName: "Camden\r\n"
},
{
    id: 49,
    cityName: "Aberdeen\r\n"
},
{
    id: 50,
    cityName: "Nashville\r\n"
},
{
    id: 51,
    cityName: "Austin\r\n"
},
{
    id: 52,
    cityName: "Logan\r\n"
},
{
    id: 53,
    cityName: "Killington"
},
{
    id: 54,
    cityName: "Altavista"
},
{
    id: 55,
    cityName: "Bellevue (home of windoze)"
},
{
    id: 56,
    cityName: "Beaver"
},
{
    id: 57,
    cityName: "Milwaukee"
},
{
    id: 58,
    cityName: "Pinedale"
},
];

const Search = ({ navigation }) => {
  const [number, onChangeNumber] = React.useState(null);
  
    //Data Source for the SearchableDropdown
    const [serverData, setServerData] = useState([]);
  
    useEffect(() => {
      fetch('https://cors-anywhere.herokuapp.com/https://localhost:44382/api/City/getcitylist')
        .then((response) => response.json())
        .then((responseJson) => {
          //Successful response from the API Call
          setServerData(responseJson.results);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  const backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to go back?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      { text: "YES", onPress: () => BackHandler.exitApp() },
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    
    <View>
      <ImageBackground
        source={require("../assets/mainpic.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container1}>
        <Image style={styles.image} source={require("../assets/logo.png")} />
        
        <View style={styles.container2}>
    <Text style={styles.title}><Text style={[styles.title, styles.color]}>IMMEDIATE </Text>SERVICE REQUEST</Text>
  </View>

          <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          //On text change listner on the searchable input
          onItemSelect={(item) => alert(JSON.stringify(item))}
          //onItemSelect called after the selection from the dropdown
          containerStyle={{ padding: 5 }}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            height: 40,
    marginBottom: 25,
    borderWidth: 1,
    width: 200,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
    padding: 5
    

          }}
          itemStyle={{
            //single dropdown item style
            padding: 10,
            marginTop: 1,
            backgroundColor: '#FAF9F8',
            borderColor: '#8e0d50',
            borderWidth: 1,
          }}
          itemTextStyle={{
            //text style of a single dropdown item
            color: '#222',
          }}
          itemsContainerStyle={{
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            maxHeight: '50%',
          }}
          items={serverData}
          //mapping of item array
          defaultIndex={2}
          //default selected item index
          placeholder="   city     "
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          //To remove the underline from the android input
        />
        <View style={styles.b2}>
          <View style={styles.button1}>
            <Button
              title="Client Search" color="#8e0d50"
              onPress={() => navigation.navigate("Services")}
            />
          </View>
          <View style={styles.button1}>
          <Button
            title="Referral Search" color="#01a14c"
            onPress={() => navigation.navigate("Services")}
          />
          <View></View>
          </View>
          {/* <View style={styles.ad}>
            <Button
              title="Admin Login"
              onPress={() => navigation.navigate("Login")}
            />
          </View> */}
        </View>
        </View>
      </ImageBackground>
      {/* <MyTab /> */}
    </View>
  );
};
export default Search;

const styles = StyleSheet.create({
  container1: {
    marginBottom: 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    marginBottom: 25,
    borderWidth: 1,
    width: 200,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
    padding: 5
  },
  ad: {
    marginTop: "8%",
  },
  button1: {
    marginBottom: 25,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    padding: 8,
    fontSize: 9,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headingText: {
    padding: 8,
  },
  container2: {
    
    flexDirection: "row",
  },
  title: {
    color: "white",
    marginTop: "5%",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: "60%",
    height: "25%",
    marginBottom: 10,
    resizeMode: "contain",
    marginTop: "11%",
  },
  color:{
    color:'#8e0d50'
  },
  b2:{
    flexDirection: "row",
    
    
  }
});


