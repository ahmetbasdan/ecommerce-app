import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LogoSVG from '../assets/svg/LogoSVG'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import colors from '../utils/colors'
import useNavigation from '../hooks/useNavigation'
import { ChevronLeft } from '../assets/svg/Icon'
import constants from '../utils/constants'

const Header = () => {
    const { top } = useSafeAreaInsets()
    const navigation = useNavigation()

    const handleBack = () => {
        navigation.goBack()
    }

    return (
        <>
            <StatusBar style='dark' />
            <View style={{ height: top, backgroundColor: colors.white }} />
            <View style={[styles.container]}>
                {navigation.canGoBack() && (
                    <Pressable style={styles.backButton} onPress={handleBack}>
                        <ChevronLeft />
                    </Pressable>
                )}

                <LogoSVG />
            </View>
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: constants.headerHeight,
        width: '100%',
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        position: 'absolute',
        left: 10,
        zIndex: 999,
        paddingTop: 4,
        height:constants.headerHeight,
        width: 40,
        justifyContent: 'center',
    }
})