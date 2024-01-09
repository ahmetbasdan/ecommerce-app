import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { BasketContext } from '../../contexts/BasketContext'
import colors from '../../utils/colors'
import BasketItem from './components/BasketItem'
import constants from '../../utils/constants'
import ActionContent from '../../components/ActionContent'

const Basket = () => {
  const { baskets } = useContext(BasketContext)
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatlist}
        data={baskets}
        renderItem={({ item }) => <BasketItem {...item} />}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <ActionContent
            style={styles.actionContent}
            type='notfound'
            text='Sepetinizde ürün bulunmamaktadır.'
            />
        }
      />
    </View>
  )
}

export default Basket

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  flatlist: {
    padding: constants.padding,
    paddingBottom: constants.padding3x + constants.bottomNavHeight,
    paddingHorizontal: constants.padding2x,
    rowGap: 30
  },
  divider: {
    height: 1,
    backgroundColor: colors.black,
    marginTop: 24
  },
  actionContent:{
    paddingTop: constants.padding2x
  }
})