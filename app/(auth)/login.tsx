import {StyleSheet, Pressable, Text, TextInput} from 'react-native';
import React, { useState } from 'react';
import {Link} from 'expo-router';

// Theme components
import ThemedView from '../../components/themedView';
import ThemedText from '../../components/themedText';
import Spacer from '../../components/spacer';
import ThemedButton from '../../components/themedButton';
import ThemedTextInput from '../../components/themedTextInput';
import { useUser } from '../../hooks/useUser';

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { user } = useUser();

    const handleSubmit = () => {
        console.log('Current user', user);
        console.log('Login form submitted', email, password);
    };

    return (
        <ThemedView style={styles.container}>
            <Spacer />

            <ThemedText title={true} style={styles.title}>
                Login to Your Account
            </ThemedText>

            <ThemedTextInput 
                style={{width: '80%', marginBottom: 20}}
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
                <Text style={{color: '#f2f2f2'}}>Login</Text>    
            </ThemedButton>           

            <Spacer height={100} />

            <Link href='/register'>
                <ThemedText style={{textAlign: 'center'}}>Register</ThemedText>
            </Link>
        </ThemedView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30,
    },
});
