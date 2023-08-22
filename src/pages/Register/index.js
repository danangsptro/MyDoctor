import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header, Input } from '../../components'

export default function Register() {
  return (
    <SafeAreaView>
      <Header />
      <View style={styles.content}>
        <Text>Register</Text>
        <Input label="Full Name" />
        <Input label="Pekerjaan" />
        <Input label="Email" />
        <Input label="Password" />
        <Input label="Continue" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 40,
    paddingTop: 0
  }
})