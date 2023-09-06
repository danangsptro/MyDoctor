import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gap, Button } from '../../atoms'
import { colors } from '../../../utils'

export default function Header({ onPress, title }) {
    return (
        <View style={styles.container}>
            <Button type="icon-only" icon="back-dark" onPress={onPress} />
            <Text style={styles.text}>{title}</Text>
            <Gap width={24} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 30,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        color: colors.primary
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        color: colors.text.primary
    }
})