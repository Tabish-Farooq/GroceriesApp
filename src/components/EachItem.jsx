import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const EachItem = ({ img, itemName, itemDescription, itemPrice, onItemPress, onFabPress, children }) => {
  return (
    <View style={styles.parentConatainer}>
      {/* Whole item press */}
      <TouchableOpacity style={{ flex: 1 }} onPress={onItemPress} activeOpacity={0.8}>
        <Image source={img} style={styles.img} />
        <Text style={styles.eachTxt}>{itemName}</Text>
        <Text style={styles.itemDesc}>{itemDescription}</Text>
      </TouchableOpacity>

      {/* Bottom Row */}
      <View style={styles.bottomRow}>
        <Text style={styles.priceTxt}>₹{itemPrice}</Text>


        {/* Fab button press */}
        <TouchableOpacity style={styles.fabBtn} onPress={onFabPress} activeOpacity={0.3}>
          <Text style={styles.fabTxt}>+</Text>
          {children}
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  parentConatainer: {
    width: 170,
    height: 220,       // height thodi kam ki
    elevation: 1,
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: 10,
    borderColor: '#E2E2E2',
    padding: 8,        // padding thodi kam
    backgroundColor: 'white'
  },
  img: {
    width: 120,        // width thoda adjust
    height: 80,        // height thodi kam
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 5
  },
  eachTxt: {
    fontSize: 17,      // thoda chhota
    fontWeight: '600',
    marginTop: 8
  },
  itemDesc: {
    fontSize: 15,      // thoda chhota
    color: 'grey',
    marginTop: 4,
    fontWeight: '400'
  },
  priceTxt: {
    fontSize: 17,
    fontWeight: '600'
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8
  },
  fabBtn: {
    width: 38,
    height: 38,
    elevation: 3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#53B175'
  },
  fabTxt: {
    fontSize: 24,
    color: 'white',
    fontWeight: '600'
  }
})

export default EachItem
