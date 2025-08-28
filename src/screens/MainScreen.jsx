import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import bannerImg from '../assets/images/banner.png';
import EachItem from '../components/EachItem';
import { useNavigation } from '@react-navigation/native';
import { ProductsRepository } from '../repository/ProductsRepository';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const MainScreen = () => {
  const [searchTxt, setSearchTxt] = useState('');
  const [exclusiveData, setExclusiveData] = useState([]);
  const [bestSellingData, setBestSellingData] = useState([]);
  const [groceriesData, setGroceriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const exclusive = await ProductsRepository.getExclusive();
        const bestSelling = await ProductsRepository.getBestSelling();
        const groceries = await ProductsRepository.getGroceries();

        setExclusiveData(exclusive);
        setBestSellingData(bestSelling);
        setGroceriesData(groceries);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart({
      id: item.id,
      heading: item.itemName,
      subHeading: item.itemDescription,
      image: item.img,
      itemPrice: item.itemPrice
    }));
  };

  const renderItem = ({ item }) => {
    if (loading) {
      return (
        <View style={styles.placeholder}>
          <ActivityIndicator size="small" color="#d3d3d3" />
        </View>
      );
    } else {
      return (
        <EachItem
          img={item.img}
          itemName={item.itemName}
          itemDescription={item.itemDescription}
          itemPrice={item.itemPrice}
          onItemPress={() => navigation.navigate('ProductDetailScreen', { product: item })}
          onFabPress={() => handleAddToCart(item)}
        />
      );
    }
  };

  const renderSection = (title, data) => (
    <View>
      <View style={styles.childContainer}>
        <Text style={[styles.headerTxt, { fontWeight: '700' }]}>{title}</Text>
        <TouchableOpacity>
          <Text style={[styles.headerTxt, { color: '#53B175', fontSize: 18 }]}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={loading ? Array(6).fill({}) : data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );

  return (
    <ScrollView style={styles.parentContainer} contentContainerStyle={{ paddingBottom: 80 }}>
      <SearchBar searchTxt={searchTxt} setSearchTxt={setSearchTxt} />
      <Image source={bannerImg} style={styles.bannerImg} />

      {renderSection('Exclusive Offer', exclusiveData)}
      {renderSection('Best Selling', bestSellingData)}
      {renderSection('Groceries', groceriesData)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
  },
  bannerImg: {
    resizeMode: 'contain',
    margin: 20,
    width: '90%',
    alignSelf: 'center',
  },
  childContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  headerTxt: {
    fontSize: 24,
    fontWeight: '400',
    margin: 15,
  },
  placeholder: {
    width: 160,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginHorizontal: 5,
  },
});

export default MainScreen;
