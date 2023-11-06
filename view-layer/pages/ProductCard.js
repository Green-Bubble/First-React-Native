import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const ProductCard = ({product}) => {

    return (
        <View style={styles.cardContainer}>
            <Image source={product.profile_picture} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{product.first_name}</Text>
                <Text style={styles.cardDescription}>{product.street}</Text>
            </View>
      </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: 'white',
      borderRadius: 10,
      elevation: 4, // Adds a shadow on Android
      shadowColor: 'black', // Adds a shadow on iOS
      shadowOffset: { width: 2, height: 2 }, // Adds a shadow on iOS
      shadowOpacity: 0.2, // Adds a shadow on iOS
      margin: 10,
    },
    cardImage: {
      width: '100%',
      height: 200,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    cardContent: {
      padding: 10,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    cardDescription: {
      fontSize: 16,
    },
  });

export default ProductCard;