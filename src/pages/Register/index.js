import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Gap, Header, Input, Loading } from '../../components'
import { colors, useForm } from '../../utils'
import Firebase from '../../config/Firebase'
import { showMessage, hideMessage } from "react-native-flash-message";

export default function Register({ navigation }) {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)


  const onContinue = () => {
    setLoading(true);
    Firebase.auth().createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        setLoading(false);
        setForm('reset');
        console.log(success, 'user Credential')
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage.replace('Firebase'));
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: "default",
          backgroundColor: colors.error,
          color: colors.white
        });
      });
  }

  return (
    <>
      <SafeAreaView style={styles.page} >
        <Header onPress={() => navigation.goBack()} title="Register" />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input label="Full Name" value={form.fullName} onChangeText={value => setForm('fullName', value)} />
            <Gap height={24} />
            <Input label="Pekerjaan" value={form.profession} onChangeText={value => setForm('profession', value)} />
            <Gap height={24} />
            <Input label="Email" value={form.email} onChangeText={value => setForm('email', value)} />
            <Gap height={24} />
            <Input label="Password" value={form.password} onChangeText={value => setForm('password', value)} secureTextEntry={true} />
            <Gap height={24} />
            {/* <Button title="Continue" onPress={() => navigation.navigate('UploadPhoto')} /> */}
            <Button title="Continue" onPress={onContinue} />
            <Gap height={24} />
          </ScrollView>
        </View>
      </SafeAreaView>
      {loading && <Loading />
      }
    </>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white, flex: 1
  },
  content: {
    padding: 40,
    paddingTop: 0
  }
})