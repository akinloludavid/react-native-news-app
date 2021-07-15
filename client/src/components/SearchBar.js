import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native'
import { SearchStyles } from '../../globalStyles/styles';
const SearchBar = ()=>{
  return (
    <View style = {SearchStyles.container}>
      <TextInput style={SearchStyles.searchInput} placeholder="Search here now..." />
      
    </View>
  )
}

export default SearchBar