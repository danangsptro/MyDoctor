import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconDoctor, IconDoctorActive, IconHospital, IconHospitalActive, IconMessage, IconMessageActive } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem = ({ title, active, onPress, onLongPress }) => {
    const Icon = () => {
        if (title === 'Doctor') {
            return active ? <IconDoctorActive /> : <IconDoctor />;
        }
        if (title === 'Messages') {
            return active ? <IconMessageActive /> : <IconMessage />;
        };
        if (title === 'Hospitals') {
            return active ? <IconHospitalActive /> : <IconHospital />;
        }
        return <IconDoctor />;
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (active) => (
        {
            fontSize: 10,
            color: active ? colors.text.mainActive : colors.text.menuInactive,
            fontFamily: fonts.primary[600],
            marginTop: 4
        }
    )
})