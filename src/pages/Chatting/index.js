import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChatItem, Header, InputChat } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { colors, fonts } from '../../utils'

const Chatting = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.page}>
            <Header type={'dark-profile'} title={'Alex Zumbro'} onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <Text style={styles.chatDate}>Sabtu, 01 Januari, 2022 </Text>
                <ChatItem isMe />
                <ChatItem />
                <ChatItem isMe />
            </View>
            <InputChat />
        </SafeAreaView>
    )
}

export default Chatting

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        flex: 1,
    },
    chatDate: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginVertical: 20,
        textAlign: 'center'
    }
})