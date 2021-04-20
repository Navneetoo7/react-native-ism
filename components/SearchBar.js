import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';

function SearchBar() {

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

    return (
        <View style={styles.container}>

            <TextInput
                style={{ ...styles.textInputStyle, }}
                value={serachItem}
                placeholder="Enter the text"
                onChangeText={(text) => searchdata(text)}
            />
            <View>
            <FlatList
                data={List}
                keyExtractor={(data) => data.id}
                renderItem={renderListItem}
            />
            </View>
            { List.length === 0 ? 
            <View>
            
            <TouchableOpacity style={styles.btnStyle}>
                <Text>Click</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyle}>
                <Text>Add</Text>
            </TouchableOpacity>
            </View>:null}
        </View>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor:'#ffffff'
    },
    textInputStyle: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: "black"
    },
    btnStyle:{
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'green',
        marginVertical:5,
        padding:15
    }
})