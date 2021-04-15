import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';

function SearchBar() {

    const Data = [
        {
            id: 1,
            name: 'Text',
        },
        {
            id: 2,
            name: 'TextInput',
        },
        {
            id: 3,
            name: 'Stylesheet',
        },
        {
            id: 4,
            name: 'Flatlist',
        },
        {
            id: 5,
            name: 'TouchableOpacity',
        },
        {
            id: 7,
            name: 'Touchable',
        },
        {
            id: 8,
            name: 'SectionList',
        }
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