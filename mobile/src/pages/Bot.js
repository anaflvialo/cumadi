import React, { useEffect , useState} from 'react';
import { View, SafeAreaView,TouchableOpacity, StyleSheet, Image, Text, TextInput } from 'react-native';
import axios from 'axios';
import * as Speech from 'expo-speech';

import Icon from 'react-native-vector-icons/FontAwesome';

const _backendEndpoint= <YOUR_URL_INTEGRATION_WATSON_ASSISTANT>;


import logo from '../assets/Logo-redondo-cumadi.png';


export default function Bot({navigation}){
    const [ans, setAns] = useState('');
    const [resposta, setResposta] = useState('');

    async function loadAns(){
        const response = await axios.get(`${_backendEndpoint}`);
        Speech.speak(response.data.output.generic[0].text,{
            language: 'pt-BR'
        });
        setAns(response.data.output.generic[0].text);
        
    }

    async function res(){
        const response = await axios.get(`${_backendEndpoint}?mensagem=${resposta}`);
        setResposta('');
        Speech.speak(response.data.output.generic[0].text,{
            language: 'pt-BR'
        });
        await setAns(response.data.output.generic[0].text); 
    }

    useEffect(()=> {
        loadAns();
        setResposta('');
    },[]);

    

    return (
        <SafeAreaView style={styles.container}>
            
            <Image style={styles.logo} source={logo} />
            <View style={styles.falas}>   
                <Text style={styles.balao}>{ans}</Text>
                <View style={styles.balaoResposta}>
                    <TextInput
                        style={styles.input}
                        placeholder="Escreva sua resposta..."
                        placeholderTextColor="#999"
                        value={resposta}
                        onChangeText={setResposta}
                    />
                </View>
                
                <TouchableOpacity style={styles.resposta} onPress={res} >
                    <Icon name='check' size={40} color={'#fff'} />
                    <Text style={styles.textoResposta}>Responder</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#41BAFF",
    },
    input: {
        borderWidth: 1,
        borderColor: 'transparent',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        marginTop: 20,
        borderRadius: 2,
        backgroundColor: 'transparent',
        width: 310,
        height: 100
    },
    logo:{
        height: 150,
        resizeMode: "contain",
        alignSelf: "center",
        marginBottom: 30
    },
    title: {
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    falas: {
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    balao: {
        backgroundColor: '#fff',
        fontSize: 20,
        borderLeftWidth: 15,
        borderLeftColor: '#41baff',
        borderTopWidth: 15,
        borderTopColor: 'transparent',
        paddingTop: 5,
        paddingHorizontal: 20,
        marginRight: 15,
        alignSelf: 'center',
        color: '#444'
    },
    balaoResposta: {
        backgroundColor: '#fff',
        fontSize: 20,
        borderRightWidth: 15,
        borderRightColor: '#41baff',
        borderBottomWidth: 15,
        borderBottomColor: 'transparent',
        paddingBottom: 5,
        marginLeft: 15,
        alignSelf: 'center',
        color: '#444',
        marginTop: 20
    },
    resposta: {
        marginTop: 10,
        alignItems: 'center'
    },
    textoResposta: {
        color: '#fff'
    }
});
