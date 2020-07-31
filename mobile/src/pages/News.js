import React, {useState} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';

import NewsList from '../components/NewsList';

import logo from '../assets/Logo-redondo-cumadi.png';
import tipografia from '../assets/noticias.png';


export default function News(){
    const [news, setNews] = useState([]);

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <Image style={styles.tipografia} source={tipografia} />
            <ScrollView>
                <NewsList />
            </ScrollView>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#41BAFF"
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
    }
});