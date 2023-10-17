import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Gap, Header, Input, Profile } from '../../components'
import { colors } from '../../utils'
import { useNavigation } from '@react-navigation/native'

const UpdateProfile = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.page}>
            <View>
                <Header title="Update Profile" onPress={() => navigation.goBack()} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.content}>
                        <Profile isRemove />
                        <Gap height={26} />
                        <Input label="Full Name" />
                        <Gap height={24} />
                        <Input label="Pekerjaan" />
                        <Gap height={24} />
                        <Input label="Email" />
                        <Gap height={24} />
                        <Input label="Password" />
                        <Gap height={40} />
                        <Button title="Save Profile" onPress={() => navigation.goBack('UserProfile')} />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>

    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        padding: 40,
        paddingTop: 0
    }
})