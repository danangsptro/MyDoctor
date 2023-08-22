import React from 'react'
import { View } from 'react-native'

export default function Gap({ height, weight }) {
    return (
        <View style={{ height: height, weight: weight }}></View>
    )
}
