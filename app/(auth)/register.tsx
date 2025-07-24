import { StyleSheet } from 'react-native'
import React from 'react'

// Theme components
import ThemedView from '../../components/themedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'

const Login = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />

      <ThemedText title={true} style={styles.title}>
        Register for an Account
      </ThemedText>

      <Spacer height={100} />

      <Link href='/login'>
      <ThemedText style={{textAlign: 'center'}}>Login</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30
    }
})