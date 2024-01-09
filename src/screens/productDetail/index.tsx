import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useMemo } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../../types'
import { Image } from 'expo-image'
import colors from '../../utils/colors'
import constants from '../../utils/constants'
import { FavoriteActive, FavoritePassive } from '../../assets/svg/Icon'
import { BasketContext } from '../../contexts/BasketContext'
import useNavigation from '../../hooks/useNavigation'

const ProductDetail = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, "ProductDetail">>()
  const { add: addBasket, baskets } = useContext(BasketContext)
  const navigation = useNavigation()
  const isBasket = useMemo(() => baskets.some((basket) => basket.id === params?.id), [baskets])

  const handleCart = () => {
    if (!isBasket) {
      addBasket(params)
    }
    else {
      navigation.navigate('Home', { screen: 'Basket' })
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.favoriteButton}>
        {params?.isFavorite || false ? <FavoriteActive /> : <FavoritePassive />}
      </View>
      <View style={styles.topContent}>
        <Image
          source={{ uri: params?.image }}
          style={styles.image}
          contentFit='contain'
        />
        <View style={styles.topRight}>
          <View>
            <Text style={styles.title}>{params?.title}</Text>
            <Text numberOfLines={1}>{params?.description}</Text>
            <Text style={styles.category}>{params?.category}</Text>
            <Text style={styles.price}>${params?.price}</Text>
          </View>
          <Pressable style={styles.button} onPress={handleCart}>
            <Text style={styles.buttonText}>{isBasket ? "GO TO CART" : "ADD TO CART"}</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.description}>
        <View style={styles.descriptionTitleBox}>
          <Text style={styles.descriptionTitle}>Description</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text>{params?.description}</Text>
        </ScrollView>
      </View>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: constants.padding
  },
  favoriteButton: {
    alignSelf: 'flex-end',
    marginBottom: 3
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    columnGap: 10,
  },
  image: {
    flex: 1,
    width: '100%',
    height: 156,
    padding: 24,
    backgroundColor: colors.white,
  },
  topRight: {
    flex: 2,
    rowGap: 6,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: '500'
  },
  category: {
    color: colors.gray,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 12
  },
  button: {
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 4
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  description: {
    rowGap: 12
  },
  descriptionTitleBox: {
    borderBottomColor: colors.black,
    borderBottomWidth: 2,
    alignSelf: 'flex-start'

  },
  descriptionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 3
  },

})