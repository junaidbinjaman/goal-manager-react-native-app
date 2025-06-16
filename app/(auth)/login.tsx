import {StyleSheet, Pressable, Text, TextInput, ActivityIndicator} from 'react-native';
import React, { useState } from 'react';
import {Link} from 'expo-router';
import { useUser } from '../../hooks/useUser';
import { Colors } from '../../constants/Colors';

// Theme components
import ThemedView from '../../components/themedView';
import ThemedText from '../../components/themedText';
import Spacer from '../../components/spacer';
import ThemedButton from '../../components/themedButton';
import ThemedTextInput from '../../components/themedTextInput';
import ThemedLoader from '../../components/themedLoader';

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] =  useState(null);

    const { login } = useUser();

    const handleSubmit = async () => {
        setError(null);

        try {
          await login(email, password)
        } catch(error: any) {
          setError(error.message)
        }
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

            <Spacer />
            {error && <Text style={styles.error}>{error}</Text>}

            <Spacer height={100} />
            <Link href='/register'>
                <ThemedText style={{textAlign: 'center'}}>Register instead</ThemedText>
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

    error: {
        color: Colors.warning,
        padding: 10,
        backgroundColor: '#f5c1c8',
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10
    }
});
