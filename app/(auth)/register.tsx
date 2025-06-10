import { Keyboard, StyleSheet, Text, Touchable, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react';

// Theme components
import ThemedView from '../../components/themedView'
import ThemedText from '../../components/themedText'
import Spacer from '../../components/spacer'
import { Link } from 'expo-router'
import ThemedButton from '../../components/themedButton'
import ThemedTextInput from '../../components/themedTextInput';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = () => {
        console.log('Register form submitted..', email, password);
    };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.container}>
      <Spacer />

      <ThemedText title={true} style={styles.title}>
        Register for an Account
      </ThemedText>

      <ThemedTextInput 
                style={{width: '80%', marginBottom: 20,}}
                placeholder='Email'
                keyboardType='email-address'
                onChangeText={setEmail}
                value={email}
                
            />

            <ThemedTextInput 
                style={{width: '80%', marginBottom: 20}}
                placeholder='Password'
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />

      <ThemedButton onPress={handleSubmit}>
                <Text style={{color: '#f2f2f2'}}>Register</Text>    
            </ThemedButton>  

      <Spacer height={100} />

      <Link href='/login'>
      <ThemedText style={{textAlign: 'center'}}>Login</ThemedText>
      </Link>
    </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30
    }
})