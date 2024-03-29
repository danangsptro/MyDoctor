import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header, List } from '../../components'
import { DummyDoctor1 } from '../../assets'
import { colors } from '../../utils'
import { useNavigation } from '@react-navigation/native'

const ChooseDoctor = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.page}>
            <Header type={'dark'} title={'Pilih Dokter Anak'} onPress={() => navigation.goBack()} />
            <List type={'next'} profile={DummyDoctor1} name={'Alexandri'} onPress={() => navigation.navigate('Chatting')} />
            <List type={'next'} profile={DummyDoctor1} name={'Alexandri'} />
            <List type={'next'} profile={DummyDoctor1} name={'Alexandri'} />
            <List type={'next'} profile={DummyDoctor1} name={'Alexandri'} />
            <List type={'next'} profile={DummyDoctor1} name={'Alexandri'} />
            <Text>Choose Doctor</Text>
        </SafeAreaView>

    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    }
})