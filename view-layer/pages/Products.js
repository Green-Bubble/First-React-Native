import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView , View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { TextInput, Button } from 'react-native-web';
import { fetchProducts } from '../../data-layer/actions/productActions';
import Swiper from 'react-native-swiper';

import ProductCard from './ProductCard';

import car1 from '../images/car1.jpg';
import car2 from '../images/car2.jpg';
import car3 from '../images/car3.jpg';

const cars = [car1, car2, car3];

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const [filter, setFilter] = useState('');

    useEffect (() => {
        dispatch(fetchProducts());
    }, [])

    return (
        <View style={styles.container}>
            <TextInput
                style = {styles.input}
                placeholder = "Search!"
                onChangeText = {(value) => setFilter(value)}
                value = {filter}
            />
            <Swiper
                autoplay
                autoplayTimeout={2} // Set the time interval for each slide (2 seconds in this case)
                showsPagination={false} // Hide pagination dots if needed
                style={styles.wrapper}
                >
                {cars.map((car, index) => (
                    <View key={index} style={styles.slide}>
                        <Image source={car} style={styles.car} />
                    </View>
                ))}
            </Swiper>
            <ScrollView  style={{width:'90%'}}>
                <FlatList
                    data = {products}
                    keyExtractor={item => item.id}
                    horizontal={true} // Enable horizontal scroll
                    renderItem = {({item}) => <ProductCard product={item} />}
                />
            </ScrollView >
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'front',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },

  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  car: {
    width: '100%',
    height: '100%',
  },
});

export default Products;
