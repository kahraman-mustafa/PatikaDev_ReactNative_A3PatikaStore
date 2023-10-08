import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';
import SearchBar from './components/SearchBar';
import store_data from './store_data.json';
import ShopItemCard from './components/ShopItemCard';

const App = props => {
  const [searchText, onChangeSearchText] = useState('');

  const renderListHeader = () => (
    <SearchBar
      searchText={searchText}
      onChangeSearchText={onChangeSearchText}
    />
  );
  const renderShopItem = ({item}) => <ShopItemCard shopItem={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageHeaderContainer}>
        <Text style={styles.pageHeader}>PATIKASTORE</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderListHeader}
        data={store_data}
        renderItem={renderShopItem}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageHeader: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#800080',
  },
  pageHeaderContainer: {
    marginHorizontal: 8,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
  },
});

export default App;
