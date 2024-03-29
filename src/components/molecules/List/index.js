import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DummyDoctor2, IconEditProfile, IconHelp, IconLanguage, IconNext, IconRate } from '../../../assets'
import { colors, fonts } from '../../../utils'

const List = ({ profile, name, desc, type, onPress, icon }) => {
    const Icon = () => {
        if (icon === 'edit-profile') {
            return <IconEditProfile />
        }
        if (icon === 'languange') {
            return <IconLanguage />
        }
        if (icon === 'rate') {
            return <IconRate />
        }
        if (icon === 'help') {
            return <IconHelp />
        }
        return <IconEditProfile />

    }
    console.log(icon, 'haha')
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {Icon ? <Icon /> : <Image source={profile} style={styles.avatar} />}
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            {type === 'next' && <IconNext />}
        </TouchableOpacity>
    )
}

export default List

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
    },
    content: {
        flex: 1,
        marginLeft: 16
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.text.primary
    },
    desc: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary
    }
})