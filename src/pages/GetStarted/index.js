import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILGetstarted, ILLogo } from '../../assets'
import { Button, Gap } from '../../components'
import { useNavigation } from '@react-navigation/native'

export default function GetStarted() {
    const navigation = useNavigation();
    return (
        <ImageBackground source={ILGetstarted} style={styles.page}>
            <View style={{ marginTop: 10 }}>
                <ILLogo />
                <Text style={styles.title}>
                    Konsultasi dengan
                    dokter jadi lebih
                    mudah & fleksibel
                </Text>
            </View>
            <View>
                <Button title="Get Started" onPress={() => navigation.navigate('Register')} />
                <Gap height={15} />
                <Button type="secondary" title="Sign In" onPress={() => navigation.replace('Login')} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 40,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        flex: 1
    },
    title: {
        fontSize: 30,
        fontWeight: "600",
        color: "black",
        marginTop: 91,
        color: 'white',
    }
})