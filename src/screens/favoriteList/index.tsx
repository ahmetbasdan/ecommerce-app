import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { FavoriteContext } from '../../contexts/FavoriteContext'
import { productsResponse } from '../../types/service'
import ProductCard from '../../components/ProductCard'
import constants from '../../utils/constants'

const FavoriteList = () => {
  const { favorites } = useContext(FavoriteContext)

  const renderItem: ListRenderItem<productsResponse> = ({ item }) => <ProductCard {...item} mode='favorite' />

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        data={favorites}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default FavoriteList

const styles = StyleSheet.create({
  flatList: {
    paddingTop: constants.padding,
    paddingBottom: constants.bottomNavHeight + constants.padding,
  }
})