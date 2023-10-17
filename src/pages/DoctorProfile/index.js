import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Gap, Header, Profile, ProfileItem } from '../../components'
import { colors } from '../../utils'
import { useNavigation } from '@react-navigation/native'

const DoctorProfile = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.page}>
            <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
            <Profile name="Jazuo" desc="Doctor Hewan" />
            <Gap height={10} />
            <ProfileItem label="Alumnus" value="Universitas Indonesia, 2020" />
            <ProfileItem label="Tempat Praktik" value="Rumah Sakit Bandung" />
            <ProfileItem label="No. STR" value="0003224284282" />
            <View style={styles.action}>
                <Button title="Start Consultation" onPress={() => navigation.navigate('Chatting')} />
            </View>
        </SafeAreaView>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    action: {
        paddingHorizontal: 40,
        paddingTop: 23
    }
})