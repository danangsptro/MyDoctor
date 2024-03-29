import React, { useEffect } from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ILLogo } from '../../assets'
import { useNavigation } from '@react-navigation/native';
import { colors, fonts } from '../../utils';

export default function Splash() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted')
        }, 3000)
    }, []);

    return (
        <SafeAreaView
            style={styles.page}>
            <ILLogo />
            <Text
                style={styles.title}>
                My Doctor
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.text.primary,
        marginTop: 20,
        fontFamily: fonts.primary[600]
    }
})