import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import GreenButton from '../components/GreenButton';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { clearFavourites } from '../redux/favouriteSlice';   
import circleImg from '../assets/images/circle.png';   // ✅ image import

const FavouriteScreen = () => {
  const dispatch = useDispatch();

  // ✅ Redux se favourite items le rahe hain
  const favouriteItems = useSelector(state => state.favourite.items);

  const renderEachItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}> 
        {/* Left side */}
        <View style={styles.leftSide}>
          <Image source={item.img} style={styles.itemImg}/>
          <View>
            <Text style={styles.itemName}>{item.itemName}</Text>
            <Text style={styles.itemDesc}>{item.itemDesciption}</Text>
          </View>
        </View>

        {/* Right side */}
        <View style={styles.rightSide}>
          <Text style={styles.itemPrice}>₹{item.itemPrice}</Text>
          <AntDesign name="right" color="#000" size={18} />
        </View>
      </View>
    )
  }

  // 👇 Add all items to cart & clear favourites
  const handleAddAllToCart = () => {
    favouriteItems.forEach(item => {
      dispatch(addToCart({
        id: item.id,
        heading: item.itemName,
        subHeading: item.itemDesciption,
        image: item.img,
        itemPrice: item.itemPrice
      }));
    });

    // ✅ saare favourites clear kar do
    dispatch(clearFavourites());
  };

  return (
    <View style={styles.parentContainer}>
      <FlatList
        data={favouriteItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderEachItem}
        ListHeaderComponent={() => ( 
          <View style={styles.headerContainer}>
            <Text style={styles.mainHeading}>Favourite</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyWrapper}>
            <Image source={circleImg} style={styles.emptyImg} />
            <Text style={styles.emptyText}>No Favourites Yet</Text>
          </View>
        )}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }} 
      />

      {/* ✅ Fixed Bottom Button */}
      {favouriteItems.length > 0 && (
        <View style={styles.bottomButtonWrapper}>
          <GreenButton name={"Add to Cart"} onPress={handleAddAllToCart} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  parentContainer:{
    flex:1,
    backgroundColor:'white'
  },
  headerContainer:{
    marginTop:50,
    paddingVertical:10,
    borderBottomWidth:1,
    borderColor:'#E5E5E5'
  },
  mainHeading:{
    fontSize:22,
    fontWeight:'600',
    textAlign:'center',
    color:'#000'
  },
  itemContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:15,
    paddingHorizontal:20,
    borderBottomWidth:1,
    borderColor:'#E5E5E5'
  },
  leftSide:{
    flexDirection:'row',
    alignItems:'center',
    flex:1
  },
  itemImg:{
    width:50,
    height:50,
    resizeMode:'contain',
    marginRight:15
  },
  itemName:{
    fontSize:16,
    fontWeight:'600',
    color:'#000'
  },
  itemDesc:{
    fontSize:14,
    color:'grey',
    marginTop:2
  },
  rightSide:{
    flexDirection:'row',
    alignItems:'center'
  },
  itemPrice:{
    fontSize:16,
    fontWeight:'600',
    color:'#000',
    marginRight:10
  },
  bottomButtonWrapper:{
    position: 'absolute',
    bottom: 20,   
    left: 0,
    right: 0,
    alignItems: 'center'
  },

  // ✅ Empty list styles
  emptyWrapper:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:50
  },
  emptyImg:{
    width:180,
    height:180,
    resizeMode:'contain',
    marginBottom:15
  },
  emptyText:{
    fontSize:16,
    color:'grey'
  }
})

export default FavouriteScreen
