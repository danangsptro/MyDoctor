import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Gap, Header, Input } from '../../components'
import { colors } from '../../utils'

export default function Register({ navigation }) {
  return (
    <SafeAreaView style={styles.page} >
      <Header onPress={() => navigation.goBack()} title="Register" />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={24} />
        <Button title="Continue" />
        <Gap height={24} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white, flex: 1
  },
  content: {
    padding: 40,
    paddingTop: 0
  }
})