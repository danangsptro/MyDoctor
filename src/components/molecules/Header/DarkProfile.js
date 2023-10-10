import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils';

const DarkProfile = () => {
  return (
    <View style={styles.container}>
      <Text>Dark profile header</Text>
    </View>
  )
}

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16
  }
})