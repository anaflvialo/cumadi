import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text, ScrollView } from 'react-native';


import logo from '../assets/Logo-redondo-cumadi.png';
import tipografia from '../assets/noticias.png';


export default function CompleteNews({navigation}){
    const thumbnail_url = navigation.getParam('thumbnail_url');
    const title = navigation.getParam('title');
    const text = navigation.getParam('text');
    const source = navigation.getParam('source');

    return (
        <SafeAreaView style={styles.container}>
            
            <Image style={styles.logo} source={logo} />
            <Image style={styles.tipografia} source={tipografia} />
            
            <ScrollView style={styles.new}>
                <Text style={styles.title}>{title}</Text>
                <Image style={styles.thumbnail} source={{uri: thumbnail_url}} />
                <Text style={styles.text}>{text}</Text>
                <Text>{source}</Text>
            </ScrollView>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#41BAFF",
    },
    logo:{
        height: 80,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 30
    },
    tipografia: {
        height: 80,
        resizeMode: "contain",
        alignSelf: "center"
    },
    new: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        paddingHorizontal: 10
    },
    title:{
        fontSize: 25,
        marginTop: 10
    },
    thumbnail: {
        width: 300,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 2,
        alignSelf: "center",
        marginTop: 10
    },
    text: {
        fontSize: 18,
        color: '#444',
        marginTop: 10,
        marginBottom: 10
    }
});