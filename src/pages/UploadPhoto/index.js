import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Gap, Header } from '../../components'
import { ILNullPhoto, IconAddPhoto } from '../../assets'
import Link from '../../components/atoms/Link'
import { colors, fonts } from '../../utils'

export default function UploadPhoto() {
    return (
        <SafeAreaView style={styles.page}>
            <Header title="Upload Photo" />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.avatarWrapper}>
                        <Image source={ILNullPhoto} style={styles.avatar} />
                        <IconAddPhoto style={styles.addPhoto} />
                    </View>
                    <Text style={styles.name}>Budi Supomo</Text>
                    <Text style={styles.profession}>CEO</Text>
                </View>
                <View>
                    <Button title="Upload and Continue" />
                    <Gap height={30} />
                    <Link title="Skip for this" align='center' size={16} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    avatar: { width: 110, height: 110 },
    content: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 64
    },
    page: { flex: 1, backgroundColor: colors.white },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addPhoto: { position: 'absolute', bottom: 8, right: 6 },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        color: colors.secondary,
        marginTop: 4
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})