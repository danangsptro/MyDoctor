import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../../components'
import { useNavigation } from '@react-navigation/native'

const Chatting = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.page}>
            <View>
                <Header type={'dark-profile'} title={'Alex Zumbro'} onPress={() => navigation.goBack()}  />
                <Text>Sabtu, 01 Januari, 2022 </Text>
            </View>
        </SafeAreaView>
    )
}

export default Chatting

const styles = StyleSheet.create({})