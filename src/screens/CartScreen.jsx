// CartScreen.js
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, decreaseQuantity, removeFromCart } from '../redux/cartSlice';
import emptyCartImg from '../assets/images/emptyCart.png';   // ✅ import image

const CartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const renderEachItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {/* Left: Image + Info */}
      <View style={styles.leftSide}>
        <Image source={item.image} style={styles.itemImg} />
        <View>
          <Text style={styles.itemName}>{item.heading}</Text>
          <Text style={styles.itemDesc}>{item.subHeading}</Text>

          {/* Quantity buttons */}
          <View style={styles.qtyWrapper}>
            <TouchableOpacity 
              onPress={() => dispatch(decreaseQuantity({ id: item.id }))} 
              style={styles.qtyBtn}
            >
              <Text style={styles.qtyBtnTxt}>-</Text>
            </TouchableOpacity>

            <Text style={styles.qtyText}>{item.quantity}</Text>

            <TouchableOpacity 
              onPress={() => dispatch(addToCart(item))} 
              style={styles.qtyBtn}
            >
              <Text style={[styles.qtyBtnTxt, { color: '#53B175' }]}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Right: Price + Remove */}
      <View style={styles.rightSide}>
        <TouchableOpacity onPress={() => dispatch(removeFromCart({ id: item.id }))}>
          <AntDesign name="close" color="#B3B3B3" size={20} />
        </TouchableOpacity>
        <Text style={styles.itemPrice}>₹{item.itemPrice * item.quantity}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.parentContainer}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderEachItem}
        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            <Text style={styles.mainHeading}>My Cart</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyCartWrapper}>
            <Image source={emptyCartImg} style={styles.emptyCartImg} />
            <Text style={styles.emptyCartText}>Your cart is empty</Text>
          </View>
        )}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerContainer: {
    marginTop: 50,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5'
  },
  mainHeading: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000'
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5'
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  itemImg: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 15
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000'
  },
  itemDesc: {
    fontSize: 14,
    color: 'grey',
    marginTop: 2,
    marginBottom: 6
  },
  qtyWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  qtyBtn: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: '#B3B3B3',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
  qtyBtnTxt: {
    fontSize: 18,
    color: '#B3B3B3'
  },
  qtyText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500'
  },
  rightSide: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 60
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginTop: 8
  },

  // ✅ Empty cart styles
  emptyCartWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  emptyCartImg: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20
  },
  emptyCartText: {
    fontSize: 16,
    color: 'grey'
  }
});

export default CartScreen;
