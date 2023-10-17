import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts } from '../../../utils'

export default function Input({ label, value, onChangeText, secureTextEntry }) {
    const [border, setBorder] = useState(colors.border)

    const onFocusForm = () => {
        setBorder(colors.tertiary)
    }

    const onBlurForm = () => {
        setBorder(colors.border)
    }

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                onFocus={onFocusForm}
                onBlur={onBlurForm} style={styles.input(border)}
                value={value}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: border => (
        {
            borderWidth: 1,
            borderColor: border,
            borderRadius: 10,
            height: 40,
            padding: 5
        }
    ),
    label: {
        fontSize: 16,
        color: colors.text.secondary,
        marginBottom: 6,
        fontFamily: fonts.primary[400]
    }
})