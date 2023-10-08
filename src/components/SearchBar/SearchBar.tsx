import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = ({searchText, onChangeSearchText}) => {
  return (
    <View style={styles.input_container}>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeSearchText(text)}
        value={searchText}
        placeholder="Ara..."
        keyboardType="default"
      />
    </View>
  );
};

export default SearchBar;
