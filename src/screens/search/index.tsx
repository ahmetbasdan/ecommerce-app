import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchInput from './components/SearchInput'
import colors from '../../utils/colors'
import constants from '../../utils/constants'
import service from '../../service'
import { useQuery } from 'react-query'
import { productsResponse } from '../../types/service'
import useNavigation from '../../hooks/useNavigation'
import ActionContent from '../../components/ActionContent'

const Search = () => {
  const [filterData, setFilterData] = useState<productsResponse[]>([])
  const [isSearched, setIsSearched] = useState(false)
  const { data } = useQuery({
    queryKey: ['productList'],
    queryFn: async () => (await service.productsService()).data
  })
  const navigation = useNavigation()

  const handleSelectedItem = (item: productsResponse) => {
    navigation.navigate("ProductDetail", { ...item, isFavorite: false })
  }

  return (
    <View style={styles.container}>
      <SearchInput
        placeholder='Type here to search'
        onChangeText={(text) => {
          if (!text) {
            setFilterData([])
            setIsSearched(false)
            return
          }
          setIsSearched(true)
          const newData = data?.filter((item) => {
            const itemData = item.title
              ? item.title.toUpperCase()
              : ''.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
          })
          setFilterData(newData || [])
        }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        data={filterData}
        renderItem={({ item }) =>
          <Pressable onPress={() => handleSelectedItem(item)}>
            <Text style={styles.product}>{item.title}</Text>
          </Pressable>}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          isSearched ? (
            <ActionContent
              type='notfound-search'
              text='Arama sonucu bulunamadı.'
            />
          ) : <></>
        }
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: constants.padding,
  },
  flatList: {
    paddingTop: 30,
    paddingBottom: constants.bottomNavHeight + constants.padding,
    rowGap: 30
  },
  product: {
    fontSize: 18
  }
})