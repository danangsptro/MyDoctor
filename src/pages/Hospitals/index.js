import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Hospital1, Hospital2, Hospital3, ILHospitalBG } from '../../assets'
import { colors, fonts } from '../../utils'
import { ListHospital } from '../../components'

export default function Hospitals() {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital pic={Hospital1} name="Citra Bunga Merdeka" address="Jl.Merdeka Baru" type="Rumah Sakit" />
        <ListHospital pic={Hospital2} name="Citra Bunga Merdeka" address="Jl.Merdeka Baru" type="Rumah Sakit Anak" />
        <ListHospital pic={Hospital3} name="Citra Bunga Merdeka" address="Jl.Merdeka Baru" type="Rumah Sakit Jiwa" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1
  },
  background: {
    height: 240,
    paddingTop: 30
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center'
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center'
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    flex: 1,
    paddingTop: 14
  }
})