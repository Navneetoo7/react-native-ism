import React , {useState, useEffect} from "react";
import {
  StyleSheet,
  Text,
  View, SafeAreaView, FlatList, ActivityIndicator,
} from "react-native";
import axios from 'axios';
// const durl = "https://reactnative.dev/movies.json";
const durl ="https://192.168.0.114:44382/api/Users/getuserlist/";


const Client = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState([]);

  useEffect(() => {
    axios.get(durl,{method: 'GET'}).then((response) =>response.json()).then((json)=>{setData(json.name);
    setTitle(json.userId);})
    .catch((error)=> alert(error)).finally(setLoading(false));
  });
  
return (
  <View style={styles.container}>
    {isLoading ? (<ActivityIndicator/> ):(
    <View>
      <Text>{userId}</Text>
    {/* <FlatList
    data={data}
    keyExtractor={({id}, index)=> id}
    renderItem={({item})=> (
      <Text>
      {item.releaseYear}
      </Text>
    )}/> */}
    </View>
    )}
  </View>
);

};
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems: "center",
    justifyContent:"center",
    paddingTop:"30%",
  },
})
export default Client;