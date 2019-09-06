import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = () => {

    return (
        <View style = {styles.backgroundStyle}>
            <Feather name = "search" style = {styles.iconStyle} />
            <TextInput style = {styles.inputStyle} placeholder = "Search"/>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        marginHorizontal: 15,
        borderRadius: 5,
        height: 50,
        flexDirection: 'row'
    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;