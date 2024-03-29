import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ILLogo } from '../../assets'
import { Button, Gap, Input } from '../../components'
import Link from '../../components/atoms/Link'
import { colors, fonts } from '../../utils'
import { useNavigation } from '@react-navigation/native'

export default function Login() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.page}>
            <ILLogo />
            <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
            <Input label="Email Address" />
            <Gap height={24} />
            <Input label="Password" />
            <Gap height={24} />
            <Link title="Forgot Password" size={12} />
            <Gap height={40} />
            <Button title="Sign In" onPress={() => navigation.replace('MainApp')}/>
            <Gap height={30} />
            <Link title="Create New Account" size={16} align="center" onPress={() => navigation.navigate('Register')} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: { padding: 40, backgroundColor: colors.white, flex: 1 },
    title: {
        fontSize: 20,
        color: colors.text.primary,
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 153,
        fontFamily: fonts.primary[600]
    }
})