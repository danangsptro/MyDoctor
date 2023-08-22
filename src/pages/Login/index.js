import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ILLogo } from '../../assets'
import { Button, Gap, Input } from '../../components'
import Link from '../../components/atoms/Link'

export default function Login() {
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
            <Button title="Sign In" />
            <Gap height={30} />
            <Link title="Create New Account" size={16} align="center" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: { padding: 40, backgroundColor: 'white', flex: 1 },
    title: {
        fontSize: 20,
        color: '#112340',
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 153
    }
})