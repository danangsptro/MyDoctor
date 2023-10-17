import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { List } from '../../components'
import { colors, fonts } from '../../utils'
import { DummyDoctor1, DummyDoctor2, DummyDoctor3 } from '../../assets';

export default function Messages() {
  const [doctors] = useState([
    {
      id: 1,
      profile: DummyDoctor1,
      name: 'Cuaks',
      desc: 'Baik bu, terima kasih atas waktunya...'
    },
    {
      id: 2,
      profile: DummyDoctor2,
      name: 'Chiaks',
      desc: 'Baik bu, terima kasih atas waktunya...'
    },
    {
      id: 3,
      profile: DummyDoctor3,
      name: 'Choco',
      desc: 'Baik bu, terima kasih atas waktunya...'
    }
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {
          doctors.map(doctor => {
            return <List
              key={doctor.id}
              name={doctor.name}
              desc={doctor.desc} />
          })
        }
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
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16
  }
})