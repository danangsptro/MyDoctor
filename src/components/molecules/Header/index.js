import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconBackDark } from '../../../assets/'
import { Gap } from '../../atoms'

export default function Header() {
    return (
        <View style={styles.container}>
            <IconBackDark />
            <Text style={styles.text}>Header</Text>
            <Gap width={24} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 30,
        backgroundColor: 'white',
        flexDirection: 'row',
        textAlign: 'center'
    },
    text: {
        flex: 1,
        textAlign: 'center'
    }
})