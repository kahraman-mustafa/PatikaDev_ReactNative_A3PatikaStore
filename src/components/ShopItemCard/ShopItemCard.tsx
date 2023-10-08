import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ShopItemCard.style';

const ShopItemCard = ({shopItem}) => {
  // console.log(shopItem.inStock);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: shopItem.imgURL}} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{shopItem.title}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.price}>{shopItem.price}</Text>
          {!shopItem.inStock && (
            <Text style={styles.notInStock}>STOKTA YOK</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default ShopItemCard;
