import React, { useContext } from 'react'
import { ActivityIndicator, FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import ProductCard from '../../components/ProductCard'
import { useQuery } from 'react-query'
import service from '../../service'
import { productsResponse } from '../../types/service'
import constants from '../../utils/constants'
import colors from '../../utils/colors'
import ActionContent from '../../components/ActionContent'

const ProductList = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['productList'],
    queryFn: async () => (await service.productsService()).data
  })

  const renderItem: ListRenderItem<productsResponse> = ({ item }) => <ProductCard {...item} mode='normal' />

  if (isLoading) return (
    <ActivityIndicator
      size={"large"}
      color={colors.primary}
      style={styles.activityIndicator}
    />
  )

  if (isError) {
    return (
      <ActionContent
        style={styles.actionContent}
        type='error'
        text='Beklenmenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.'
      />
    )
  }

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
  },
  activityIndicator: {
    paddingTop: constants.padding2x,
  },
  actionContent: {
    paddingTop: constants.padding2x
  }
})