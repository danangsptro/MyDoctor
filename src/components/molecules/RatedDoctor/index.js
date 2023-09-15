import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DummyDoctor1, IconStar } from '../../../assets'
import { colors, fonts } from '../../../utils'

const RatedDoctor = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Alex Cumbro</Text>
        <Text>Doctor Specialist</Text>
      </View>
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </View>
  )
}

export default RatedDoctor

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16
  },
  profile: {
    flex: 1
  },
  rate: {
    flexDirection: 'row'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2,
  }
})