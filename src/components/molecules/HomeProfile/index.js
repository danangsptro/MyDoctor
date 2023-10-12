import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DummyUser } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { useNavigation } from '@react-navigation/native'

const HomeProfile = ({ onPress }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image source={DummyUser} style={styles.avatar} />
                <View>
                    <Text style={styles.name}>Qumo Zaki</Text>
                    <Text style={styles.profession}>Senior Frontend Developer</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: { flexDirection: 'row' },
    avatar: { width: 46, height: 46, borderRadius: 46 / 2, marginRight: 12 },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    },
    profession: {
        fontSize: 12,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary
    }
})