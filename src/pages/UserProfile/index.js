import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header, List, Profile } from '../../components'

const UserProfile = () => {
  return (
    <SafeAreaView>
      <View>
        <Header title="User Profile" />
        <Profile />
        <Text>UserProfile</Text>
        <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="edit-profile" />
        <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="languange" />
        <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="rate" />
        <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="help" />
      </View>
    </SafeAreaView>
  )
}

export default UserProfile

const styles = StyleSheet.create({})