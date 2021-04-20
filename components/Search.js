import React, {useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  Text,
  BackHandler,
  Alert,
  TextInput,
  FlatList,
} from "react-native";
import SearchableDropdown from 'react-native-searchable-dropdown';


// import MyTab from "./MyTabs.js";

const Search = ({ navigation }) => {
  const Data = [
    {
        id: 1,
        name: 'Huntsville',
    },
    {
        id: 2,
        name: 'Anchorage',
    },
    {
        id: 3,
        name: 'Phoenix',
    },
    {
        id: 4,
        name: 'Little Rock',
    },
    {
        id: 5,
        name: 'Sacramento',
    },
    {
        id: 6,
        name: 'Los Angeles',
    },
    {
        id: 7,
        name: 'Beverly Hills',
    },
    {
        id: 8,
        name: 'Denver',
    },
    {
        id: 9,
        name: "Hartford",
    },
    {
        id: 10,
        name: "Dover",
    },
    {
        id: 11,
        name: "Washington",
    },
    {
        id: 12,
        name: "Pensacola",
    },
    {
        id: 13,
        name: "Miami",
    },
    {
        id: 14,
        name: "Orlando",
    },
    {
        id: 15,
        name: "Atlanta"
    },
    {
        id: 16,
        name: "Honolulu"
    },
    {
        id: 17,
        name: "Montpelier"
    },
    {
        id: 18,
        name: "Chicago"
    },
    {
        id: 19,
        name: "Springfield"
    },
    {
        id: 20,
        name: "Indianapolis"
    },
    {
        id: 21,
        name: "Davenport"
    },
    {
        id: 22,
        name: "Des Moines"
    },
    {
        id: 23,
        name: "Wichita"
    },
    {
        id: 24,
        name: "Hazard"
    },
    {
        id: 25,
        name: "New Orleans"
    },
    {
        id: 26,
        name: "Freeport"
    },
    {
        id: 27,
        name: "Baltimore"
    },
    {
        id: 28,
        name: "Boston"
    },
    {
        id: 29,
        name: "Coldwater"
    },
    {
        id: 30,
        name: "Gaylord"
    },
    {
        id: 31,
        name: "Duluth"
    },
    {
        id: 32,
        name: "Biloxi"
    },
    {
        id: 33,
        name: "St. Louis"
    },
    {
        id: 34,
        name: "Laurel"
    },
    {
        id: 35,
        name: "Hastings"
    },
    {
        id: 36,
        name: "Reno"
    },
    {
        id: 37,
        name: "Ashland"
    },
    {
        id: 38,
        name: "Livingston"
    },
    {
        id: 39,
        name: "Santa Fe"
    },
    {
        id: 40,
        name: "New York"
    },
    {
        id: 41,
        name: "Oxford"
    },
    {
        id: 42,
        name: "Walhalla"
    },
    {
        id: 43,
        name: "Cleveland"
    },
    {
        id: 44,
        name: "Tulsa"
    },
    {
        id: 45,
        name: "Portland"
    },
    {
        id: 46,
        name: "Pittsburgh"
    },
    {
        id: 47,
        name: "Newport"
    },
    {
        id: 48,
        name: "Camden"
    },
    {
        id: 49,
        name: "Aberdeen"
    },
    {
        id: 50,
        name: "Nashville"
    },
    {
        id: 51,
        name: "Austin"
    },
    {
        id: 52,
        name: "Logan"
    },
    {
        id: 53,
        name: "Killington"
    },
    {
        id: 54,
        name: "Altavista"
    },
    {
        id: 55,
        name: "Bellevue (home of windoze)"
    },
    {
        id: 56,
        name: "Beaver"
    },
    {
        id: 57,
        name: "Milwaukee"
    },
    {
        id: 58,
        name: "Pinedale"
    },
]

const [List, setList] = useState([]);
const [serachItem, setSearchItem] = useState('');



const SearchItem = (textForSearch, ItemFormSearch) => {
    let selectedData;
    const sData = ItemFormSearch;
    const serachText = textForSearch.toLowerCase();
    const AllData = sData;
    const filterData = AllData.filter((Dt) => {
        return Dt.name.toLowerCase().match(serachText);
    });
    if (serachText === '') {
        selectedData = [];
    } else {
        selectedData = filterData;
    }
    return selectedData;
};

const searchdata = (value) => {
    setSearchItem(value);
    let data = SearchItem(value, Data);
    setList([...data]);
    console.log(List)
}

const renderListItem = ({ item }) => {
    return (
        <TouchableOpacity style={{ ...styles.textInputStyle, marginVertical: 3 }} onPress={() => {
            setSearchItem(item.name);
            setList('');
        }}>
            <Text style={{ fontSize: 20, color: 'black', width: '100%' }}>{item.name}</Text>
        </TouchableOpacity>
    );
}
  const [number, onChangeNumber] = React.useState(null);
  
    //Data Source for the SearchableDropdown
    const [serverData, setServerData] = useState([]);
  
   
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
    
    <View >
      <ImageBackground
        source={require("../assets/mainpic.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container1}>
        <Image style={styles.image} source={require("../assets/logo.png")} />
        
        <View style={styles.container2}>
    <Text style={styles.title}><Text style={[styles.title, styles.color]}>IMMEDIATE </Text>SERVICE REQUEST</Text>
  </View>

          
  <TextInput
                style={{ ...styles.textInputStyle, }}
                value={serachItem}
                placeholder="Enter city"
                onChangeText={(text) => searchdata(text)}
            />
            <View style={styles.main}>
            <FlatList
                data={List}
                keyExtractor={(data) => data.id}
                renderItem={renderListItem}
            />
            </View>
            { List.length === 0 ? 
            <View style={styles.b2}>
          <View style={styles.button1}>
            <Button
              title="Client Search" color="#8e0d50"
              onPress={() => navigation.navigate("Services")}
            />
            
          </View>
          <View style={[styles.button1, styles.sp]}>
          <Button
            title="Referral Search" color="#01a14c" 
            onPress={() => navigation.navigate("Login")}
          />
          </View>
         
        </View>:null}
        </View>
      </ImageBackground>
      {/* <MyTab /> */}
    </View>
  );
};
export default Search;

const styles = StyleSheet.create({
  main:{
    alignItems: "center",
    justifyContent: "center",  
    width:"100%",
  },
  container1: {
    marginTop:0,
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
    justifyContent:"space-between",
    position: 'relative',
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
    height: 120,
    marginBottom: 10,
    resizeMode: "contain",
    position: 'relative',
  },
  color:{
    color:'#8e0d50'
  },
  b2:{
    flexDirection: "row",
    marginTop:10

  },
  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#8e0d50",
    position: 'relative',
  },
  loginText:{
    color:"white",
    position: 'relative',
  },
  sp:{
    paddingLeft:"2%",
    position: 'relative',
  },
  textInputStyle: {
    width: '70%',
    padding: 10,
    borderWidth: 1,
    height:50,
    borderRadius:10,
    backgroundColor:"white",
    borderColor:"#8e0d50",
    marginTop : "5%",
    position: 'relative',
},

});


