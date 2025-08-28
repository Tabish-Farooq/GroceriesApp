import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../redux/favouriteSlice";
import { addToCart } from "../redux/cartSlice";

const ProductDetailScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { product } = route.params;
    const [count, setCount] = useState(1);

    const dispatch = useDispatch();
    const favouriteItems = useSelector(state => state.favourite.items);
    const isFavorite = favouriteItems.some(fav => fav.id === product.id);
    const totalPrice = count * product.itemPrice;

    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.itemInfo}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="left" color="#000" size={28} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="download" color="#000" size={28} />
                    </TouchableOpacity>
                </View>
                <Image source={product.img} style={styles.img} resizeMode="contain" />
            </View>

            {/* Body Section */}
            <View style={styles.body}>
                <Text style={styles.title}>{product.itemName}</Text>
                <TouchableOpacity onPress={() => dispatch(toggleFavourite(product))}>
                    <AntDesign
                        name={isFavorite ? "heart" : "hearto"}
                        size={28}
                        color={isFavorite ? "#53B175" : "#AAA"}
                    />
                </TouchableOpacity>
            </View>

            <Text style={styles.subTitle}>{product.itemDescription}</Text>

            {/* Quantity + Price */}
            <View style={styles.addItemRow}>
                <View style={styles.quantityRow}>
                    <TouchableOpacity style={styles.qtyBtn} onPress={() => setCount(prev => Math.max(1, prev - 1))}>
                        <Feather name="minus" color="#B3B3B3" size={24} />
                    </TouchableOpacity>
                    <View style={styles.qtyBox}>
                        <Text style={styles.qtyText}>{count}</Text>
                    </View>
                    <TouchableOpacity style={styles.qtyBtn} onPress={() => setCount(prev => prev + 1)}>
                        <Feather name="plus" color="#53B175" size={24} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.totalPrice}>₹{totalPrice}</Text>
            </View>

            {/* Product Description */}
            <View style={styles.descHeader}>
                <Text style={styles.descTitle}>Product Detail</Text>
                <AntDesign name="down" color="#000" size={22} />
            </View>
            <Text style={styles.descText}>
                {product.itemName} is nutritious and fresh. Perfect for a healthful and varied diet. Best quality handpicked just for you.
            </Text>

            {/* Add To Basket Button */}
            <TouchableOpacity
                style={styles.addBtn}
                onPress={() => {
                    dispatch(addToCart({
                        id: product.id,
                        heading: product.itemName,
                        subHeading: product.itemDescription,
                        image: product.img,
                        itemPrice: product.itemPrice,
                        quantity: count
                    }));
                    navigation.navigate('MainTabs', { screen: 'Cart' });
                }}
            >
                <Text style={styles.addBtnText}>Add To Basket</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },

    itemInfo: {
        width: '100%',
        height: 350,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        backgroundColor: '#F5F5F5',
        paddingVertical: 40,
        alignItems: 'center',
    },
    header: { flexDirection: 'row', justifyContent: 'space-between', width: '90%' },
    img: { width: 220, height: 220, marginTop: 10 },

    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 15,
    },
    title: { fontSize: 22, fontWeight: '600', flex: 1 },
    subTitle: { fontSize: 16, color: '#7C7C7C', paddingHorizontal: 20, marginTop: 5 },

    addItemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 15,
    },
    quantityRow: { flexDirection: 'row', alignItems: 'center' },
    qtyBtn: { paddingHorizontal: 8 },
    qtyBox: {
        height: 40,
        width: 40,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    qtyText: { fontSize: 18, fontWeight: '500' },
    totalPrice: { fontSize: 20, fontWeight: '600' },

    descHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 25,
    },
    descTitle: { fontSize: 18, fontWeight: '500' },
    descText: {
        fontSize: 14,
        color: '#7C7C7C',
        marginHorizontal: 20,
        marginTop: 8,
        lineHeight: 22,
        textAlign: 'justify',
    },

    addBtn: {
        width: '90%',
        backgroundColor: '#53B175',
        padding: 14,
        borderRadius: 25,
        elevation: 5,
        alignSelf: 'center',
        marginVertical: 25,
    },
    addBtnText: { textAlign: 'center', fontSize: 18, fontWeight: '500', color: '#fff' },
});
