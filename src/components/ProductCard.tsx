import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Image } from 'expo-image'
import { FavoriteActive, FavoritePassive } from '../assets/svg/Icon';
import { FavoriteContext } from '../contexts/FavoriteContext';
import { productsResponse } from '../types/service';
import colors from '../utils/colors';
import useNavigation from '../hooks/useNavigation';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

interface IProductCard extends productsResponse {
  mode: 'favorite' | 'normal'
}

const PrductCard: React.FC<IProductCard> = (props) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const { add, remove } = useContext(FavoriteContext)
  const navigation = useNavigation()

  const handleFavorite = () => {
    setIsFavorite(isFavorite => {
      if (isFavorite) {
        remove(props)
      } else {
        add(props)
      }
      return !isFavorite
    })
  }

  const handleCard = () => {
    navigation.navigate('ProductDetail', {
      ...props,
      isFavorite: props.mode === 'favorite' ? true : isFavorite
    })
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.card} onPress={handleCard}>
        {props.mode === 'normal' && (
          <Pressable style={styles.favorite} onPress={handleFavorite}>
            {isFavorite ? <FavoriteActive /> : <FavoritePassive />}
          </Pressable>
        )}
        <Image
          placeholder={blurhash}
          style={styles.image}
          source={{ uri: props?.image }}
          contentFit='contain'
        />
        <Text style={styles.title} numberOfLines={2}>{props?.title}</Text>
        <View style={styles.button} >
          <Text style={styles.buttonText}>Shop now</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default PrductCard

const styles = StyleSheet.create({
  container: {
    width: '50%',
    alignItems: 'center',
    marginBottom: 20,
  },
  favorite: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 60,
    height: 60,
    zIndex: 999,
    alignItems: 'flex-end',
    padding: 12
  },
  card: {
    width: '90%',
    backgroundColor: colors.white,
    padding: 12,
    paddingVertical: 18,
    alignItems: 'center',
    rowGap: 10,
    flex: 1
  },
  image: {
    height: 111,
    width: 111,
  },
  title: {
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
  },
  button: {
    borderBottomWidth: 2,
    borderColor: colors.black,
    paddingBottom: 3,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '400'
  }
})