import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import IconOnly from './IconOnly'
import BtnIconSend from './BtnIconSend'

export default function Button({ type, title, onPress, icon, disable }) {
    if (type === 'btn-icon') {
        return <BtnIconSend disable={disable} />
    }
    if (type === 'icon-only') {
        return <IconOnly icon={icon} onPress={onPress} />
    }
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'secondary' ? colors.button.secondary.background : colors.button.primary.background,
        paddingVertical: 10,
        borderRadius: 10,
    }),
    text: (type) => ({
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        fontFamily: fonts.primary[600],
        color: type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text
    })
})