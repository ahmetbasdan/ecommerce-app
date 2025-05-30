import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { productsResponse } from '../../../types/service'
import { Image } from 'expo-image'
import colors from '../../../utils/colors'
import { BasketContext } from '../../../contexts/BasketContext'
import useNavigation from '../../../hooks/useNavigation'

interface IBasketItem extends productsResponse { }

const BasketItem: React.FC<IBasketItem> = (props) => {
    const { remove, baskets } = useContext(BasketContext)
    const navigation = useNavigation()

    const handleRemove = () => {
        remove(props)
    }

    const goToProductDetail = () => {
        const isFavorite = baskets.some(x => x.id === props.id)
        navigation.navigate('ProductDetail', { ...props, isFavorite })
    }

    return (
        <Pressable onPress={goToProductDetail} style={styles.container}>
            <Image source={{ uri: props?.image }} style={styles.image} contentFit='contain' />
            <View style={styles.right}>
                <Text numberOfLines={1} style={styles.title}>{props?.title}</Text>
                <View style={styles.textContent}>
                    <Text numberOfLines={1}>{props?.description}</Text>
                    <Text style={styles.category}>{props?.category}</Text>
                </View>
                <Pressable style={styles.cancelButton} onPress={handleRemove}>
                    <Text style={styles.cancelButtonText}>Remove</Text>
                </Pressable>
            </View>
        </Pressable>
    )
}

export default BasketItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: 10,
    },
    image: {
        height: 81,
        width: 81
    },
    right: {
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    textContent: {
        marginVertical: 8,
    },
    category: {
        color: colors.gray
    },
    cancelButton: {
        borderBottomWidth: 2,
        alignSelf: 'flex-start',
        paddingBottom: 3
    },
    cancelButtonText: {
        fontWeight: '500'
    }

})