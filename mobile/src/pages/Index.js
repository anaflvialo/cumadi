import React from 'react';
import { View, SafeAreaView, StyleSheet, Image} from 'react-native';

import logo from '../assets/Logo-redondo-cumadi.png';
import tipografia from '../assets/tipografia-branca.png';


export default function Index({navigation}){
    function handleNavigateNews(){
        navigation.navigate('News');
    }

    function handleNavigateSuggestions(){
        navigation.navigate('News');
    }

    return (
        <SafeAreaView style={styles.container}>
            
            <Image style={styles.logo} source={logo} />
            <Image style={styles.tipografia} source={tipografia} />
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
    logo:{
        height: 150,
        resizeMode: "contain",
        alignSelf: "center"
    },
    tipografia: {
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
    }
});