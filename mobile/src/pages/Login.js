import React, { useState, useEffect } from 'react';
import { View,AsyncStorage, KeyboardAvoidingView, Platform, Image, TextInput, Text, TouchableOpacity ,StyleSheet} from 'react-native';

import api from '../services/api';

import logo from '../assets/Logo-redondo-cumadi.png';
import tipografia from '../assets/tipografia-branca.png';

export default function Login({navigation}){
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');

    useEffect(()=> {
        AsyncStorage.getItem('user').then(user => {
            if (user){
                navigation.navigate('Index');
            }
        })
    },[]);

    async function handleSubmit(){
        
        const response = await api.post('/sessions', {
            nome: nome,
            email: email
        })

        const {_id} = response.data;

        await AsyncStorage.setItem('user', _id);
        await AsyncStorage.setItem('nome', nome);
        
        navigation.navigate('Index');
    }

    

    return (
    <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior="padding" style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Image source={tipografia} style={styles.tipografia} />
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#999"
                value={nome}
                onChangeText={setNome}
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>);
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#41BAFF"
    },
    logo: {
        maxWidth: 120,
        maxHeight: 120
    },
    tipografia: {
        maxHeight: 50,
        maxWidth: 124
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2,
        backgroundColor: '#fff'
    },
    button: {
        height: 42,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    buttonText: {
        fontSize: 16,
        color: '#444'
    }
});