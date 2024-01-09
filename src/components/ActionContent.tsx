import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { Calendar, InformationOutline, Search } from '../assets/svg/Icon'
import colors from '../utils/colors'
import constants from '../utils/constants'

interface IActionContent {
    type: "notfound" | "notfound-search" | "error",
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
            case "error":
                return <InformationOutline />
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
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 24
    },
    title: {
        fontSize: 16,
        color: colors.gray,
        textAlign: 'center',
        paddingHorizontal: constants.padding
    }
})