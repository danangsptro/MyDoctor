import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Gap, Header, List, Profile } from '../../components'
import { colors } from '../../utils'
import { useNavigation } from '@react-navigation/native'

const UserProfile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.page}>
      <View >
        <Header title="Profile" onPress={() => navigation.goBack()} />
        <Gap height={10} />
        <Profile name="Razui Suis" desc="Product Designer" />
        <Gap height={14} />
        <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="edit-profile" onPress={() => navigation.navigate('UpdateProfile')} />
        <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="languange" />
        <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="rate" />
        <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="help" />
      </View>
    </SafeAreaView>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  }
})