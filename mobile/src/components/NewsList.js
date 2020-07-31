import React, {useState, useEffect} from 'react';
import { withNavigation } from 'react-navigation';
import {View, StyleSheet, Text, FlatList, Image, TouchableOpacity} from 'react-native';

import api from '../services/api';

function NewsList({navigation}){
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function loadNews(){
            const response = await api.get('/news');
            setNews(response.data);
        }
        loadNews();
    },[]);

    function handleNavigate(thumbnail_url, title, text, source){
        navigation.navigate('CompleteNews', {thumbnail_url, title, text, source});
    }

    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.list}
                data={news}
                keyExtractor={news => news._id}
                vertical
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Image style={styles.thumbnail} source={{uri: item.thumbnail_url}} />
                        <Text style={styles.title}>{item.title}</Text>
                        <TouchableOpacity onPress={() => handleNavigate(item.thumbnail_url, item.title, item.text, item.source )} style={styles.button}>
                            <Text style={styles.buttonText}>Ler mais</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    list: {
        paddingHorizontal: 20
    },
    listItem: {
        marginBottom: 15,
        backgroundColor: '#fff'
    },
    thumbnail: {
        width: 300,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 2,
        alignSelf: "center",
        marginTop: 10
    },
    title: {
        fontSize: 20,
        paddingHorizontal: 10
    },
    button: {
        height: 32,
        width: 100,
        backgroundColor: '#42D5FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        alignSelf: 'center',
        marginBottom: 10
    },
    buttonText: {
        fontSize: 15,
        color: '#fff'
    }
});

export default withNavigation(NewsList);