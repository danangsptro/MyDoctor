import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components'
import { colors, fonts } from '../../utils'
import { DummyDoctor1, DummyDoctor2, DummyDoctor3, JSONCategoryDoctor } from '../../assets'
import { useNavigation } from '@react-navigation/native'

export default function Doctor() {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={32} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {
                  JSONCategoryDoctor.data.map(item => {
                    return <DoctorCategory key={item.id} category={item.category} onPress={() => navigation.navigate('ChooseDoctor')} />
                  })
                }
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <RatedDoctor name="Alexa Rachel" desc="Pediatrician" avatar={DummyDoctor2} onPress={() => navigation.navigate('DoctorProfile')} />
            <RatedDoctor name="Zero Hamburg" desc="Zamuandi" avatar={DummyDoctor3} onPress={() => navigation.navigate('DoctorProfile')} />
            <RatedDoctor name="Jazio Yani" desc="Qataui" avatar={DummyDoctor1} onPress={() => navigation.navigate('DoctorProfile')} />
            <Text style={styles.sectionLabel}>Good News </Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209
  },
  category: {
    flexDirection: 'row'
  },
  wrapperScroll: {
    // marginHorizontal: -16

  },
  wrapperSection: {
    paddingHorizontal: 16
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 19
  }
})