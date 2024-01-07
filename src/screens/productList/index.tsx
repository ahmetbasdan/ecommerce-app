import React, { useContext } from 'react'
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import ProductCard from '../../components/ProductCard'
import { useQuery } from 'react-query'
import service from '../../service'
import { productsResponse } from '../../types/service'
import constants from '../../utils/constants'

const ProductList = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['productList'],
    queryFn: async () => (await service.productsService()).data
  })

  const renderItem: ListRenderItem<productsResponse> = ({ item }) => <ProductCard {...item} mode='normal' />

  if (isLoading) return <Text>Loading...</Text>

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        data={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
  flatList: {
    paddingTop: constants.padding,
    paddingBottom: constants.bottomNavHeight + constants.padding,
  }
})