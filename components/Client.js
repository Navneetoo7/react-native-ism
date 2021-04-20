import React , {useState, useEffect} from "react";
import {
  StyleSheet,
  Text,
  View, Button, FlatList, ActivityIndicator,ImageBackground, TouchableOpacity, Linking,Platform
} from "react-native";
import axios from 'axios';

const Client = () => {
  const [isLoading, setLoading] = useState(true);
  const [userId, setUserId] = useState([]);
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);


  

  useEffect(() => {
    fetch('https://liasmithapitest.azurewebsites.net/api/Users/getuserlist')                                 
      .then((response) =>response.json())
      .then((json) =>{ setData(json)})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  dialCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${this.item.mobile}';
    }
    else {
      phoneNumber = 'telprompt:${this.item.mobile}';
    }

    Linking.openURL(phoneNumber);
  };
  
return (
  <View style={styles.container1}>
  <ImageBackground
  source={require("../assets/green.png")}
  style={{ width: "100%", height: "100%" }}
>
  <View style={styles.container}>
  
  <Text style={styles.text1}>USER  LIST</Text>
    {isLoading ? (<ActivityIndicator/> ):(
    <View>
      {/* <Text>{data.name}</Text> */}
      
    <FlatList
    data={data}
    keyExtractor={({id}, index)=> id}
    renderItem={({item})=> (
      <View style={styles.body}>
      
      <Text style={styles.text2}>{item.name+ '        ' +item.city+ '        ' + item.mobile}</Text>
      {/* <Button  title="call" color="#009688" /> */}
      <TouchableOpacity onPress={dialCall} activeOpacity={0.7} style={styles.button} >
 
          <Text style={styles.TextStyle}>Call</Text>
 
        </TouchableOpacity>
      
      </View>
    )}/>
    </View>
    )}
  </View>
  </ImageBackground>
  </View>
  
);

};
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems: "center",
    justifyContent:"center",
    paddingTop:"14%",
    backgroundColor:"#65c08a",
    
  },
  body:{
    flex:1,
    backgroundColor:"#fff",
    alignItems: "center",
    justifyContent:"center",
    paddingTop:"3%",
    flexDirection:"row",
    backgroundColor:"#65c08a",
  },
  text1:{
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  text2:{
    paddingRight:"1%",
    fontSize: 15,
  },
  button:{
    backgroundColor:"#009688",
    width: "14%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:10

   }
})
export default Client;