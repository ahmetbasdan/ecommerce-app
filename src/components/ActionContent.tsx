import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { Calendar, Search } from '../assets/svg/Icon'
import colors from '../utils/colors'

interface IActionContent {
    type: "notfound" | "notfound-search",
    text?: string,
    style?: ViewStyle
}

const ActionContent: React.FC<IActionContent> = ({
    type,
    text = "Kayıt bulunamadı.",
    style
}) => {

    const handleIcon = (): ReactNode => {
        switch (type) {
            case "notfound":
                return <Calendar />
            case "notfound-search":
                return <Search />

            default:
                return <Calendar />
        }
    }
    return (
        <View style={[styles.container, style]}>
            {handleIcon()}
            <Text style={styles.title}>{text}</Text>
        </View>
    )
}

export default ActionContent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 24
    },
    title: {
        fontSize: 16,
        color: colors.gray
    }
})